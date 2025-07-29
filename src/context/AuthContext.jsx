import { createContext, useContext, useState, useEffect } from 'react'
import { authService } from '../services/auth'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const userData = await authService.getCurrentUser()
        setUser(userData)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Error checking auth status:', error)
      logout()
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      // Usuario temporal para testing (mientras no hay backend)
      if (email === 'admin@admin.com' && password === 'admin123') {
        const userData = {
          id: 1,
          name: 'Administrador',
          email: 'admin@admin.com',
          company: 'Support360',
          role: 'admin'
        }
        
        localStorage.setItem('token', 'temp-token-123')
        setUser(userData)
        setIsAuthenticated(true)
        
        return { success: true }
      }
      
      // Usuario demo para testing
      if (email === 'demo@demo.com' && password === 'demo123') {
        const userData = {
          id: 2,
          name: 'Usuario Demo',
          email: 'demo@demo.com',
          company: 'Empresa Demo',
          role: 'user'
        }
        
        localStorage.setItem('token', 'temp-token-456')
        setUser(userData)
        setIsAuthenticated(true)
        
        return { success: true }
      }
      
      // Intentar login real con API (si está disponible)
      try {
        const response = await authService.login(email, password)
        const { token, user: userData } = response
        
        localStorage.setItem('token', token)
        setUser(userData)
        setIsAuthenticated(true)
        
        return { success: true }
      } catch (apiError) {
        // Si falla el API, mostrar error de credenciales
        return { 
          success: false, 
          error: 'Credenciales inválidas. Usa admin@admin.com / admin123 o demo@demo.com / demo123' 
        }
      }
    } catch (error) {
      return { 
        success: false, 
        error: 'Error de autenticación' 
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
} 