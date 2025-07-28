import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

function Carrito() {
  const { carrito, quitarDelCarrito, actualizarCantidad, limpiarCarrito } = useContext(CarritoContext);
  const total = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  const totalItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  const handleCheckout = () => {
    // Aquí iría la lógica para proceder al checkout
    console.log('Procediendo al checkout...');
  };

  return (
    <div className="carrito-page">
      <div className="container py-4">
        {/* Header del Carrito */}
        <div className="carrito-header mb-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="carrito-title mb-2">
                <i className="fas fa-shopping-cart me-3"></i>
                Carrito de Compras
              </h1>
              <p className="carrito-subtitle">
                {totalItems} {totalItems === 1 ? 'producto' : 'productos'} en tu carrito
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="carrito-actions">
                {carrito.length > 0 && (
                  <button 
                    onClick={limpiarCarrito}
                    className="btn btn-outline-danger btn-lg me-3"
                  >
                    <i className="fas fa-trash me-2"></i>
                    Vaciar carrito
                  </button>
                )}
                <Link to="/catalogo" className="btn btn-outline-custom btn-lg">
                  <i className="fas fa-arrow-left me-2"></i>
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>

        {carrito.length === 0 ? (
          <div className="carrito-vacio">
            <div className="text-center py-5">
              <i className="fas fa-shopping-cart fa-4x text-muted mb-4"></i>
              <h3 className="mb-3">Tu carrito está vacío</h3>
              <p className="text-muted mb-4">
                Parece que aún no has agregado ningún producto a tu carrito.
              </p>
              <Link to="/catalogo" className="btn btn-primary-custom btn-lg">
                <i className="fas fa-shopping-bag me-2"></i>
                Explorar productos
              </Link>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {/* Lista de Productos */}
            <div className="col-lg-8">
              <div className="carrito-productos">
                {carrito.map((prod, idx) => (
                  <div key={idx} className="carrito-item">
                    <div className="row align-items-center g-3">
                      <div className="col-md-2 col-4">
                        <div className="carrito-imagen-container">
                          <img 
                            src={prod.imagen} 
                            alt={prod.nombre} 
                            className="carrito-imagen"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-8">
                        <div className="carrito-info">
                          <h5 className="carrito-nombre">{prod.nombre}</h5>
                          <div className="carrito-detalles">
                            <span className="carrito-color">
                              <span 
                                className="color-indicator" 
                                style={{ backgroundColor: prod.color }}
                              ></span>
                              Color
                            </span>
                            <span className="carrito-talla">
                              <i className="fas fa-ruler me-1"></i>
                              Talla {prod.talla}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-6">
                        <div className="carrito-precio">
                          <span className="precio-unitario">
                            ₡{prod.precio.toLocaleString('es-CR')}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-2 col-6">
                        <div className="carrito-cantidad">
                          <div className="cantidad-controls">
                            <button 
                              className="btn-cantidad"
                              onClick={() => actualizarCantidad(idx, prod.cantidad - 1)}
                              disabled={prod.cantidad <= 1}
                            >
                              <i className="fas fa-minus"></i>
                            </button>
                            <span className="cantidad-valor">{prod.cantidad}</span>
                            <button 
                              className="btn-cantidad"
                              onClick={() => actualizarCantidad(idx, prod.cantidad + 1)}
                            >
                              <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 col-6">
                        <div className="carrito-subtotal">
                          <span className="subtotal-valor">
                            ₡{(prod.precio * prod.cantidad).toLocaleString('es-CR')}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-1 col-6">
                        <div className="carrito-acciones">
                          <button 
                            className="btn-eliminar"
                            onClick={() => quitarDelCarrito(idx)}
                            title="Eliminar producto"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumen del Pedido */}
            <div className="col-lg-4">
              <div className="carrito-resumen">
                <h4 className="resumen-titulo mb-3">
                  <i className="fas fa-receipt me-2"></i>
                  Resumen del Pedido
                </h4>
                
                <div className="resumen-detalles">
                  <div className="resumen-item">
                    <span>Subtotal ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})</span>
                    <span>₡{total.toLocaleString('es-CR')}</span>
                  </div>
                  <div className="resumen-item">
                    <span>Envío</span>
                    <span className={total >= 50000 ? 'text-success' : 'text-muted'}>
                      {total >= 50000 ? 'Gratis' : '₡5,000'}
                    </span>
                  </div>
                  {total < 50000 && (
                    <div className="resumen-item text-success">
                      <small>
                        <i className="fas fa-info-circle me-1"></i>
                        Agrega ₡{(50000 - total).toLocaleString('es-CR')} más para envío gratis
                      </small>
                    </div>
                  )}
                  <hr />
                  <div className="resumen-total">
                    <span>Total</span>
                    <span className="total-valor">
                      ₡{(total >= 50000 ? total : total + 5000).toLocaleString('es-CR')}
                    </span>
                  </div>
                </div>

                <div className="resumen-acciones">
                  <button 
                    className="btn btn-primary-custom btn-lg w-100 mb-4"
                    onClick={handleCheckout}
                  >
                    <i className="fas fa-credit-card me-2"></i>
                    Proceder al Pago
                  </button>
                  <Link 
                    to="/catalogo" 
                    className="btn btn-outline-custom btn-lg w-100"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Seguir Comprando
                  </Link>
                </div>

                <div className="resumen-beneficios">
                  <div className="beneficio-item">
                    <i className="fas fa-shipping-fast text-success"></i>
                    <span>Envío gratis en pedidos superiores a ₡50,000</span>
                  </div>
                  <div className="beneficio-item">
                    <i className="fas fa-undo text-success"></i>
                    <span>30 días para devoluciones</span>
                  </div>
                  <div className="beneficio-item">
                    <i className="fas fa-shield-alt text-success"></i>
                    <span>Pago 100% seguro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Carrito; 