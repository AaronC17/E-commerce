import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    aceptoTerminos: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.apellido.trim()) {
      newErrors.apellido = 'El apellido es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!formData.aceptoTerminos) {
      newErrors.aceptoTerminos = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simular proceso de registro
    setTimeout(() => {
      setIsLoading(false);
      // Aquí iría la lógica real de registro
      console.log('Registration attempt:', formData);
    }, 2000);
  };

  const handleGoogleRegister = () => {
    // Lógica para registro con Google
    console.log('Google registration clicked');
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        {/* Iconos decorativos de fondo */}
        <div className="background-icons">
          <div className="bg-icon bg-icon-1">
            <i className="fas fa-user-plus"></i>
          </div>
          <div className="bg-icon bg-icon-2">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="bg-icon bg-icon-3">
            <i className="fas fa-heart"></i>
          </div>
          <div className="bg-icon bg-icon-4">
            <i className="fas fa-gift"></i>
          </div>
        </div>
      </div>

      <div className="auth-container">
        <div className="auth-card">
          {/* Header */}
          <div className="auth-header">
            <div className="auth-title">
              <i className="fas fa-user-plus auth-icon"></i>
              <h1>Crear Cuenta</h1>
            </div>
            <div className="auth-underline"></div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="auth-form">
            {/* Nombre y Apellido */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  <i className="fas fa-user label-icon"></i>
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={`form-input ${errors.nombre ? 'error' : ''}`}
                  required
                />
                {errors.nombre && <span className="error-message">{errors.nombre}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <i className="fas fa-user label-icon"></i>
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Tu apellido"
                  className={`form-input ${errors.apellido ? 'error' : ''}`}
                  required
                />
                {errors.apellido && <span className="error-message">{errors.apellido}</span>}
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-envelope label-icon"></i>
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="usuario@dominio.com"
                className={`form-input ${errors.email ? 'error' : ''}`}
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            {/* Contraseña */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-lock label-icon"></i>
                Contraseña
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`form-input password-input ${errors.password ? 'error' : ''}`}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {/* Confirmar Contraseña */}
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-lock label-icon"></i>
                Confirmar Contraseña
              </label>
              <div className="password-input-container">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`form-input password-input ${errors.confirmPassword ? 'error' : ''}`}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            {/* Términos y Condiciones */}
            <div className="form-group">
              <label className="checkbox-container terms-checkbox">
                <input
                  type="checkbox"
                  name="aceptoTerminos"
                  checked={formData.aceptoTerminos}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="checkmark"></span>
                <span className="terms-text">
                  Acepto los <Link to="/terminos" className="terms-link">Términos y Condiciones</Link> y la <Link to="/privacidad" className="terms-link">Política de Privacidad</Link>
                </span>
              </label>
              {errors.aceptoTerminos && <span className="error-message">{errors.aceptoTerminos}</span>}
            </div>

            {/* Botón de Registro */}
            <button
              type="submit"
              className={`btn-login ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Creando cuenta...
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus"></i>
                  Crear Cuenta
                </>
              )}
            </button>

            {/* Separador */}
            <div className="auth-separator">
              <span className="separator-line"></span>
              <span className="separator-text">o</span>
              <span className="separator-line"></span>
            </div>

            {/* Botón de Google */}
            <button
              type="button"
              className="btn-google"
              onClick={handleGoogleRegister}
            >
              <div className="google-icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              Registrarse con Google
            </button>

            {/* Link de Login */}
            <div className="auth-footer">
              <span className="auth-question">¿Ya tienes una cuenta?</span>
              <Link to="/login" className="auth-link">
                Iniciar Sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro; 