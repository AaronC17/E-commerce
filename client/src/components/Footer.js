import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-center py-3 mt-auto shadow-sm" style={{ borderTop: '1px solid #eee' }}>
      <div className="container">
        <span className="fw-bold" style={{ color: 'var(--primary)' }}>SWAPTURE</span> &copy; {new Date().getFullYear()} - Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer; 