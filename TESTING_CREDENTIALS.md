# 🔑 Credenciales de Testing - Support360 Activetrac

## 👨‍💻 **Usuarios Temporales para Pruebas**

Mientras no hay backend configurado, puedes usar estas credenciales para probar la aplicación:

### **Administrador:**
- **Email:** `admin@admin.com`
- **Contraseña:** `admin123`
- **Rol:** Administrador del sistema

### **Usuario Demo:**
- **Email:** `demo@demo.com`
- **Contraseña:** `demo123`
- **Rol:** Usuario final

## 🚀 **Cómo Usar:**

1. Ejecuta la aplicación: `npm run dev`
2. Ve a `http://localhost:3000`
3. Usa cualquiera de las credenciales de arriba
4. ¡Listo! Ya puedes navegar por la aplicación

## 📝 **Notas:**

- Estas credenciales están hardcodeadas en `src/context/AuthContext.jsx`
- Cuando tengas backend real, simplemente quita la lógica temporal
- Los datos del usuario se guardan en localStorage temporalmente
- Al hacer logout se limpian los datos

## 🔄 **Para Eliminar Usuarios Temporales:**

Cuando ya tengas backend, busca en `src/context/AuthContext.jsx` la función `login` y elimina la parte que dice:

```javascript
// Usuario temporal para testing (mientras no hay backend)
// ... código a eliminar ...
```

Y deja solo la llamada real al API. 