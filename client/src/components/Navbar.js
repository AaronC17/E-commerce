import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

function Navbar() {
  const { carrito } = useContext(CarritoContext);
  const totalItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: 'var(--primary-dark)' }}>
          SWAPTURE
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link d-flex align-items-center" to="/carrito">
                <i className="fas fa-shopping-cart"></i>
                {totalItems > 0 && (
                  <span className="badge bg-success ms-1 position-absolute top-0 start-100 translate-middle" style={{ fontSize: 13, minWidth: 22, borderRadius: 12 }}>{totalItems}</span>
                )}
              </Link>
            </li>
          </ul>
          <div className="navbar-auth-buttons d-flex align-items-center gap-2">
            <Link className="btn btn-outline-custom px-3" to="/login">
              <i className="fas fa-sign-in-alt me-2"></i>
              Iniciar Sesión
            </Link>
            <Link className="btn btn-primary-custom px-3" to="/registro">
              <i className="fas fa-user-plus me-2"></i>
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 