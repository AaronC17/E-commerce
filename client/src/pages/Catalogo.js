import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const categorias = ['Todas', 'Pantalones', 'Camisas', 'T-shirts', 'Hoodies'];

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [ordenarPor, setOrdenarPor] = useState('nombre');

  useEffect(() => {
    axios.get('http://localhost:5000/api/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error('Error al obtener productos:', err));
  }, []);

  const productosFiltrados = productos.filter(producto => 
    categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada
  );

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    switch (ordenarPor) {
      case 'precio-asc':
        return a.precio - b.precio;
      case 'precio-desc':
        return b.precio - a.precio;
      case 'nombre':
        return a.nombre.localeCompare(b.nombre);
      default:
        return 0;
    }
  });

  return (
    <div className="catalogo-page">
      {/* Header del Catálogo */}
      <section className="catalogo-header-section py-4 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="catalogo-title-main mb-2">
                Nuestro <span className="text-gradient">Catálogo</span>
              </h1>
              <p className="catalogo-subtitle">
                Descubre nuestra colección completa de prendas únicas y modernas
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <div className="catalogo-stats">
                <span className="stats-item">
                  <i className="fas fa-tshirt me-1"></i>
                  {productos.length} Productos
                </span>
                <span className="stats-item">
                  <i className="fas fa-star me-1"></i>
                  4.8/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros y Ordenamiento */}
      <section className="filters-section py-3 mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="categoria-filters">
                <span className="filter-label me-3">Categorías:</span>
                {categorias.map(categoria => (
                  <button
                    key={categoria}
                    className={`btn btn-sm ${categoriaSeleccionada === categoria ? 'btn-primary-custom' : 'btn-outline-custom'}`}
                    onClick={() => setCategoriaSeleccionada(categoria)}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="ordenamiento">
                <span className="filter-label me-2">Ordenar por:</span>
                <select 
                  className="form-select form-select-sm d-inline-block w-auto"
                  value={ordenarPor}
                  onChange={(e) => setOrdenarPor(e.target.value)}
                >
                  <option value="nombre">Nombre</option>
                  <option value="precio-asc">Precio: Menor a Mayor</option>
                  <option value="precio-desc">Precio: Mayor a Menor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="products-grid-section">
        <div className="container">
          <div className="row g-3">
            {productosOrdenados.map(producto => (
              <div key={producto._id} className="col-lg-4 col-md-6">
                <div className="product-card-catalogo">
                  <div className="product-image-container">
                    <img 
                      src={producto.imagen} 
                      className="product-image-catalogo" 
                      alt={producto.nombre} 
                    />
                    <div className="product-overlay">
                      <Link 
                        to={`/producto/${producto._id}`} 
                        className="btn btn-light btn-sm"
                      >
                        <i className="fas fa-eye me-1"></i>
                        Ver detalles
                      </Link>
                    </div>
                    <div className="product-badge">
                      <span className="badge bg-primary-custom">{producto.categoria}</span>
                    </div>
                    <div className="product-quick-info">
                      <div className="quick-info-item">
                        <i className="fas fa-ruler me-1"></i>
                        {producto.tallas.join(', ')}
                      </div>
                      <div className="quick-info-item">
                        <i className="fas fa-palette me-1"></i>
                        {producto.colores.length} colores
                      </div>
                    </div>
                  </div>
                  <div className="product-info-catalogo">
                    <h5 className="product-title-catalogo">{producto.nombre}</h5>
                    <p className="product-description-catalogo">{producto.descripcion}</p>
                    <div className="product-rating mb-2">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <span className="ms-2 text-muted">(4.8)</span>
                    </div>
                    <div className="product-price-section">
                      <span className="product-price-catalogo">
                        ₡{producto.precio.toLocaleString('es-CR')}
                      </span>
                      <Link 
                        to={`/producto/${producto._id}`} 
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

          {/* Mensaje si no hay productos */}
          {productosOrdenados.length === 0 && (
            <div className="text-center py-5">
              <div className="no-products">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h3>No se encontraron productos</h3>
                <p className="text-muted">Intenta cambiar los filtros de búsqueda</p>
                <button 
                  className="btn btn-primary-custom"
                  onClick={() => setCategoriaSeleccionada('Todas')}
                >
                  Ver todos los productos
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Catalogo;
