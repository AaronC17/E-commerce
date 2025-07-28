import React from 'react';
import { Link } from 'react-router-dom';

const productos = [
  { 
    id: 1, 
    nombre: 'Jogger Beige Volcom', 
    precio: 12000, 
    imagen: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80',
    categoria: 'Pantalones',
    descripcion: 'Jogger beige volcom con acabados de máxima calidad'
  },
  { 
    id: 2, 
    nombre: 'Camisa Oversize', 
    precio: 9000, 
    imagen: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80',
    categoria: 'Camisas',
    descripcion: 'Camisa oversize de algodón premium'
  },
  { 
    id: 3, 
    nombre: 'T-shirt Amarillo', 
    precio: 7000, 
    imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    categoria: 'T-shirts',
    descripcion: 'T-shirt amarillo vibrante, ideal para verano'
  },
  { 
    id: 4, 
    nombre: 'Pantalón Cargo', 
    precio: 15000, 
    imagen: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80',
    categoria: 'Pantalones',
    descripcion: 'Pantalón cargo resistente y cómodo'
  },
  { 
    id: 5, 
    nombre: 'Hoodie Negro', 
    precio: 11000, 
    imagen: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80',
    categoria: 'Hoodies',
    descripcion: 'Hoodie negro clásico, suave y abrigado'
  },
  { 
    id: 6, 
    nombre: 'Camisa Cuadros', 
    precio: 9500, 
    imagen: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=400&q=80',
    categoria: 'Camisas',
    descripcion: 'Camisa de cuadros para un look casual'
  }
];

function Home() {
  return (
    <>
      {/* Hero Section Mejorado */}
      <section className="hero-section-modern mb-3">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="hero-title-modern mb-2">
                Descubre tu estilo con{' '}
                <span className="text-gradient">SWAPTURE</span>
              </h1>
              <p className="hero-subtitle-modern mb-3">
                La tienda de ropa más cool, moderna y fácil de usar. 
                ¡Compra, combina y luce increíble con el mejor estilo urbano!
              </p>
              <div className="hero-buttons">
                <Link to="/catalogo" className="btn btn-primary-custom btn-lg me-3 mb-2">
                  <i className="fas fa-shopping-bag me-2"></i>
                  Ver catálogo
                </Link>
                <Link to="/ofertas" className="btn btn-outline-custom btn-lg mb-2">
                  <i className="fas fa-tags me-2"></i>
                  Ver ofertas
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" 
                  alt="Streetwear Collection" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-3 my-3">
        <div className="container">
          <div className="row g-2">
            <div className="col-md-4 text-center">
              <div className="feature-card">
                <div className="feature-icon mb-2">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <h5 className="feature-title">Envío Gratis</h5>
                <p className="feature-text">En pedidos superiores a ₡50.000</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card">
                <div className="feature-icon mb-2">
                  <i className="fas fa-undo"></i>
                </div>
                <h5 className="feature-title">Devolución Fácil</h5>
                <p className="feature-text">30 días para cambios y devoluciones</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="feature-card">
                <div className="feature-icon mb-2">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h5 className="feature-title">Pago Seguro</h5>
                <p className="feature-text">Transacciones 100% seguras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section py-2">
        <div className="container">
          <div className="section-header text-center mb-2">
            <h2 className="section-title-modern mb-2">
               <span className="text-gradient">Productos más vendidos</span>
            </h2>
            <p className="section-subtitle">
              Descubre nuestra colección de ropa única y moderna
            </p>
          </div>

          <div className="row g-2">
            {productos.map(producto => (
              <div key={producto.id} className="col-lg-4 col-md-6">
                <div className="product-card-modern">
                  <div className="product-image-container">
                    <img 
                      src={producto.imagen} 
                      className="product-image-modern" 
                      alt={producto.nombre} 
                    />
                    <div className="product-overlay">
                      <Link 
                        to={`/producto/${producto.id}`} 
                        className="btn btn-light btn-sm"
                      >
                        <i className="fas fa-eye me-1"></i>
                        Ver detalles
                      </Link>
                    </div>
                    <div className="product-badge">
                      <span className="badge bg-primary-custom">{producto.categoria}</span>
                    </div>
                  </div>
                  <div className="product-info">
                    <h5 className="product-title-modern">{producto.nombre}</h5>
                    <p className="product-description">{producto.descripcion}</p>
                    <div className="product-rating mb-2">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <span className="ms-2 text-muted">(4.8)</span>
                    </div>
                    <div className="product-price-section">
                      <span className="product-price-modern">
                        ₡{producto.precio.toLocaleString('es-CR')}
                      </span>
                      <Link 
                        to={`/producto/${producto.id}`} 
                        className="btn btn-primary-custom btn-sm"
                      >
                        <i className="fas fa-shopping-cart me-1"></i>
                        Comprar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-3">
            <div className="cta-card">
              <h3 className="cta-title mb-2">¿No encuentras lo que buscas?</h3>
              <p className="cta-text mb-3">
                Explora nuestra colección completa y encuentra el estilo perfecto para ti
              </p>
              <Link to="/catalogo" className="btn btn-outline-custom btn-lg">
                <i className="fas fa-search me-2"></i>
                Explorar más productos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; 