import React from 'react';

function Checkout() {
  return (
    <div className="container py-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4 fw-bold" style={{ color: 'var(--primary)' }}>Finalizar compra</h2>
      <form className="bg-white p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nombre completo</label>
          <input type="text" className="form-control" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input type="text" className="form-control" placeholder="Dirección de envío" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="correo@ejemplo.com" />
        </div>
        <button type="submit" className="btn btn-success w-100">
          <i className="fas fa-check-circle me-2"></i>Pagar
        </button>
      </form>
    </div>
  );
}

export default Checkout; 