import axios from 'axios'

// Configuración base de Axios
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const authService = {
  // Login
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
      })
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Registro
  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Obtener usuario actual
  async getCurrentUser() {
    try {
      const response = await api.get('/user/me')
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Logout
  async logout() {
    try {
      await api.post('/auth/logout')
    } catch (error) {
      console.error('Error en logout:', error)
    } finally {
      localStorage.removeItem('token')
    }
  },

  // Verificar si el token es válido
  isTokenValid() {
    const token = localStorage.getItem('token')
    if (!token) return false
    
    try {
      // Decodificar el token JWT (solo para verificar expiración)
      const payload = JSON.parse(atob(token.split('.')[1]))
      const currentTime = Date.now() / 1000
      
      return payload.exp > currentTime
    } catch (error) {
      return false
    }
  }
}

export default api 