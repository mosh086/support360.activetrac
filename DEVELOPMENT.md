# 🚀 Guía de Desarrollo - Support360 Activetrac

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Git

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/mosh086/support360.activetrac.git
cd support360.activetrac
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
cp env.example .env
```

Edita el archivo `.env` con tus configuraciones:
```env
VITE_API_URL=http://localhost:8000/api
VITE_DEV_MODE=true
```

### 4. Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Button.jsx      # Botón con variantes
│   ├── Input.jsx       # Campo de entrada
│   └── PrivateRoute.jsx # Protección de rutas
├── context/            # Contextos de React
│   └── AuthContext.jsx # Contexto de autenticación
├── pages/              # Páginas de la aplicación
│   ├── Login.jsx       # Página de login
│   └── Home.jsx        # Página principal
├── services/           # Servicios de API
│   └── auth.js         # Servicio de autenticación
├── utils/              # Utilidades
│   └── validation.js   # Validaciones de formularios
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta la aplicación en modo desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run lint` | Ejecuta el linter de código |

## 🎨 Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework de estilos
- **Vite** - Build tool y dev server

## 🔐 Autenticación

El sistema utiliza autenticación basada en JWT:

- **Login**: `POST /auth/login`
- **Usuario actual**: `GET /user/me`
- **Logout**: `POST /auth/logout`

### Flujo de Autenticación

1. Usuario ingresa credenciales en `/login`
2. Se valida el formulario localmente
3. Se envía petición al endpoint de login
4. Se almacena el token en localStorage
5. Se redirige a `/home`
6. Se verifica la autenticación en cada carga

## 🧪 Componentes Principales

### Input Component
```jsx
<Input
  type="email"
  label="Correo Electrónico"
  placeholder="tu@email.com"
  value={email}
  onChange={handleChange}
  error={errors.email}
  required
/>
```

### Button Component
```jsx
<Button
  variant="primary" // primary, secondary, danger, outline
  loading={isLoading}
  onClick={handleClick}
>
  Texto del botón
</Button>
```

## 📱 Responsive Design

La aplicación está diseñada para ser responsive usando Tailwind CSS:

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid y Flexbox para layouts

## 🔄 Estado de la Aplicación

### AuthContext
Maneja el estado global de autenticación:

```jsx
const { user, isAuthenticated, loading, login, logout } = useAuth()
```

### Estado Local
Cada componente maneja su propio estado local con `useState`

## 🚀 Próximos Pasos

1. **Implementar creación de tickets**
2. **Agregar historial de tickets**
3. **Implementar chat en tiempo real**
4. **Agregar sistema de notificaciones**
5. **Implementar dashboard con estadísticas**

## 🐛 Debugging

### Herramientas de Desarrollo
- React Developer Tools
- Redux DevTools (cuando se implemente Redux)
- Network tab para debugging de API

### Logs
Los errores se muestran en la consola del navegador y en la UI cuando es apropiado.

## 📝 Convenciones de Código

- **Componentes**: PascalCase (ej: `LoginPage`)
- **Funciones**: camelCase (ej: `handleSubmit`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `API_BASE_URL`)
- **Archivos**: kebab-case (ej: `auth-service.js`)

## 🤝 Contribución

1. Crear una rama feature: `git checkout -b feature/nueva-funcionalidad`
2. Hacer commits descriptivos
3. Crear Pull Request a `development`
4. Esperar review y merge

## 📞 Soporte

Para dudas o problemas:
- Crear un issue en GitHub
- Contactar al equipo de desarrollo
- Revisar la documentación de la API 