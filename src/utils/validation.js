// Validación de email
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validación de campos requeridos
export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

// Validación de contraseña (mínimo 6 caracteres)
export const validatePassword = (password) => {
  return password && password.length >= 6
}

// Validación completa del formulario de login
export const validateLoginForm = (email, password) => {
  const errors = {}

  if (!validateRequired(email)) {
    errors.email = 'El email es requerido'
  } else if (!validateEmail(email)) {
    errors.email = 'El formato del email no es válido'
  }

  if (!validateRequired(password)) {
    errors.password = 'La contraseña es requerida'
  } else if (!validatePassword(password)) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Validación de teléfono (opcional)
export const validatePhone = (phone) => {
  if (!phone) return true // Es opcional
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

// Validación completa del formulario de registro
export const validateRegisterForm = (formData) => {
  const errors = {}

  // Validar nombre
  if (!validateRequired(formData.name)) {
    errors.name = 'El nombre es requerido'
  } else if (formData.name.length < 2) {
    errors.name = 'El nombre debe tener al menos 2 caracteres'
  }

  // Validar email
  if (!validateRequired(formData.email)) {
    errors.email = 'El email es requerido'
  } else if (!validateEmail(formData.email)) {
    errors.email = 'El formato del email no es válido'
  }

  // Validar empresa
  if (!validateRequired(formData.company)) {
    errors.company = 'La empresa es requerida'
  }

  // Validar teléfono (opcional)
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'El formato del teléfono no es válido'
  }

  // Validar contraseña
  if (!validateRequired(formData.password)) {
    errors.password = 'La contraseña es requerida'
  } else if (!validatePassword(formData.password)) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres'
  }

  // Validar confirmación de contraseña
  if (!validateRequired(formData.confirmPassword)) {
    errors.confirmPassword = 'Debes confirmar la contraseña'
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
} 