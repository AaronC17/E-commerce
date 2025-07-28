import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CarritoContext } from '../context/CarritoContext';

const productos = [
  { 
    id: 1, 
    nombre: 'Jogger Beige Volcom', 
    precio: 12000, 
    moneda: '₡', 
    descripcion: 'Jogger beige volcom con acabados de máxima calidad. Perfecto para un look casual y elegante. Material suave y cómodo con elástico en la cintura y tobillos.',
    imagenes: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#e5e5c9', '#bca37f', '#8b7355'], 
    tallas: [26, 28, 30, 32],
    categoria: 'Pantalones',
    stock: 15,
    rating: 4.8,
    reviews: 127
  },
  { 
    id: 2, 
    nombre: 'Camisa Oversize', 
    precio: 9000, 
    moneda: '₡', 
    descripcion: 'Camisa oversize de algodón premium con diseño moderno. Perfecta para cualquier ocasión. Corte relajado que favorece a todos los tipos de cuerpo.',
    imagenes: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#e0e0e0', '#a3c1da', '#2c3e50'], 
    tallas: ["S", "M", "L"],
    categoria: 'Camisas',
    stock: 8,
    rating: 4.6,
    reviews: 89
  },
  { 
    id: 3, 
    nombre: 'T-shirt Amarillo', 
    precio: 7000, 
    moneda: '₡', 
    descripcion: 'T-shirt amarillo vibrante con diseño moderno, ideal para verano. Material ligero y transpirable que mantiene la frescura durante todo el día.',
    imagenes: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#ffe066', '#f9d923', '#f39c12'], 
    tallas: ["S", "M", "L", "XL"],
    categoria: 'T-shirts',
    stock: 22,
    rating: 4.9,
    reviews: 156
  },
  { 
    id: 4, 
    nombre: 'Pantalón Cargo', 
    precio: 15000, 
    moneda: '₡', 
    descripcion: 'Pantalón cargo resistente y cómodo con diseño moderno. Múltiples bolsillos funcionales y diseño urbano. Perfecto para actividades al aire libre.',
    imagenes: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#b2a177', '#7c6f57', '#2c3e50'], 
    tallas: [28, 30, 32, 34],
    categoria: 'Pantalones',
    stock: 12,
    rating: 4.7,
    reviews: 94
  },
  { 
    id: 5, 
    nombre: 'Hoodie Negro', 
    precio: 11000, 
    moneda: '₡', 
    descripcion: 'Hoodie negro con diseño moderno, suave y abrigado. Perfecto para días fríos. Material premium con capucha ajustable y bolsillo frontal.',
    imagenes: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#232323', '#444', '#2c3e50'], 
    tallas: ["M", "L", "XL"],
    categoria: 'Hoodies',
    stock: 18,
    rating: 4.8,
    reviews: 203
  },
  { 
    id: 6, 
    nombre: 'Camisa Cuadros', 
    precio: 9500, 
    moneda: '₡', 
    descripcion: 'Camisa de cuadros con diseño moderno para un look casual y elegante. Material de alta calidad con patrón clásico que nunca pasa de moda.',
    imagenes: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#b22222', '#4682b4', '#2c3e50'], 
    tallas: ["S", "M", "L"],
    categoria: 'Camisas',
    stock: 10,
    rating: 4.5,
    reviews: 67
  },
  { 
    id: 7, 
    nombre: 'Jeans Slim Fit', 
    precio: 13000, 
    moneda: '₡', 
    descripcion: 'Jeans slim fit con stretch y diseño moderno para mayor comodidad. Corte urbano que se adapta perfectamente al cuerpo.',
    imagenes: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#2c3e50', '#34495e', '#1a252f'], 
    tallas: [28, 30, 32, 34, 36],
    categoria: 'Pantalones',
    stock: 14,
    rating: 4.6,
    reviews: 112
  },
  { 
    id: 8, 
    nombre: 'Sudadera con Capucha', 
    precio: 12500, 
    moneda: '₡', 
    descripcion: 'Sudadera con capucha y diseño moderno perfecta para el día a día. Material suave y cómodo con estilo urbano.',
    imagenes: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#95a5a6', '#7f8c8d', '#2c3e50'], 
    tallas: ["S", "M", "L", "XL"],
    categoria: 'Hoodies',
    stock: 16,
    rating: 4.7,
    reviews: 145
  },
  { 
    id: 9, 
    nombre: 'Polo Clásico', 
    precio: 8500, 
    moneda: '₡', 
    descripcion: 'Polo clásico de algodón pima con diseño moderno. Diseño elegante y versátil. Perfecto para ocasiones formales y casuales.',
    imagenes: [
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    ], 
    colores: ['#ecf0f1', '#bdc3c7', '#2c3e50'], 
    tallas: ["S", "M", "L", "XL"],
    categoria: 'T-shirts',
    stock: 20,
    rating: 4.8,
    reviews: 178
  }
];

function DetalleProducto() {
  const { id } = useParams();
  const [imgIdx, setImgIdx] = useState(0);
  const [colorSel, setColorSel] = useState(0);
  const [tallaSel, setTallaSel] = useState(0);
  const [cantidad, setCantidad] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { agregarAlCarrito } = useContext(CarritoContext);
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return (
      <div className="producto-no-encontrado">
        <div className="container py-4">
          <div className="text-center">
            <i className="fas fa-search fa-3x text-muted mb-3"></i>
            <h2 className="mb-3">Producto no encontrado</h2>
            <p className="text-muted mb-4">El producto que buscas no existe o ha sido removido.</p>
            <Link to="/catalogo" className="btn btn-primary-custom">
              <i className="fas fa-arrow-left me-2"></i>
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAgregar = () => {
    if (cantidad < 1) {
      setError('La cantidad debe ser al menos 1');
      return;
    }
    
    if (cantidad > producto.stock) {
      setError(`Solo hay ${producto.stock} unidades disponibles`);
      return;
    }

    const item = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagenes[0],
      color: producto.colores[colorSel],
      talla: producto.tallas[tallaSel],
      cantidad: cantidad
    };

    agregarAlCarrito(item);
    setSuccess('¡Producto agregado al carrito exitosamente!');
    setError('');
    
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt text-warning"></i>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star text-warning"></i>);
    }
    
    return stars;
  };

  return (
    <div className="detalle-producto-page">
      <div className="container py-3">
        {/* Breadcrumb */}
        <nav className="breadcrumb-nav mb-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">Inicio</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/catalogo" className="breadcrumb-link">Catálogo</Link>
            </li>
            <li className="breadcrumb-item">
              <span className="breadcrumb-link">{producto.categoria}</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {producto.nombre}
            </li>
          </ol>
        </nav>

        <div className="producto-detalle-container">
          {/* Galería de Imágenes */}
          <div className="producto-galeria">
            <div className="imagen-principal">
              <img 
                src={producto.imagenes[imgIdx]} 
                alt={producto.nombre} 
                className="imagen-principal-img"
              />
            </div>
            {producto.imagenes.length > 1 && (
              <div className="imagenes-miniaturas">
          {producto.imagenes.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImgIdx(idx)}
                    className={`miniatura-btn ${imgIdx === idx ? 'activa' : ''}`}
                  >
                    <img 
                      src={img} 
                      alt={`${producto.nombre} ${idx + 1}`} 
                      className="miniatura-img"
                    />
                  </button>
          ))}
        </div>
            )}
          </div>

          {/* Información del Producto */}
          <div className="producto-info">
            <div className="producto-header">
              <span className="producto-categoria">{producto.categoria}</span>
              <h1 className="producto-titulo">{producto.nombre}</h1>
              <div className="producto-rating">
                {renderStars(producto.rating)}
                <span className="rating-text">({producto.rating}/5)</span>
                <span className="reviews-count">• {producto.reviews} reseñas</span>
              </div>
            </div>

            <div className="producto-precio">
              <span className="precio-moneda">₡</span>
              <span className="precio-valor">{producto.precio.toLocaleString('es-CR')}</span>
            </div>

            <div className="producto-descripcion">
              <p>{producto.descripcion}</p>
      </div>

            {/* Colores */}
            <div className="producto-opciones">
              <h4 className="opcion-titulo">Color</h4>
              <div className="colores-opciones">
          {producto.colores.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setColorSel(idx)}
                    className={`color-btn ${colorSel === idx ? 'seleccionado' : ''}`}
                    style={{ backgroundColor: color }}
                    title={`Color ${idx + 1}`}
                  />
          ))}
        </div>
            </div>

            {/* Tallas */}
            <div className="producto-opciones">
              <h4 className="opcion-titulo">Talla</h4>
              <div className="tallas-opciones">
          {producto.tallas.map((talla, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTallaSel(idx)}
                    className={`talla-btn ${tallaSel === idx ? 'seleccionado' : ''}`}
                  >
                    {talla}
                  </button>
                ))}
              </div>
            </div>

            {/* Cantidad */}
            <div className="producto-opciones">
              <h4 className="opcion-titulo">Cantidad</h4>
              <div className="cantidad-selector">
                <button 
                  className="cantidad-btn"
                  onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                  disabled={cantidad <= 1}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="cantidad-valor">{cantidad}</span>
                <button 
                  className="cantidad-btn"
                  onClick={() => setCantidad(Math.min(producto.stock, cantidad + 1))}
                  disabled={cantidad >= producto.stock}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <span className="stock-info">
                {producto.stock} unidades disponibles
              </span>
            </div>

            {/* Mensajes de Error/Success */}
            {error && (
              <div className="mensaje-error">
                <i className="fas fa-exclamation-circle me-2"></i>
                {error}
              </div>
            )}
            {success && (
              <div className="mensaje-success">
                <i className="fas fa-check-circle me-2"></i>
                {success}
              </div>
            )}

            {/* Botón de Agregar al Carrito */}
            <button 
              onClick={handleAgregar}
              className="btn-agregar-carrito"
              disabled={producto.stock === 0}
            >
              <i className="fas fa-shopping-cart me-2"></i>
              {producto.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
            </button>

            {/* Información adicional */}
            <div className="producto-info-adicional">
              <div className="info-item">
                <i className="fas fa-shipping-fast"></i>
                <span>Envío gratis en pedidos superiores a ₡50,000</span>
              </div>
              <div className="info-item">
                <i className="fas fa-undo"></i>
                <span>30 días para devoluciones</span>
              </div>
              <div className="info-item">
                <i className="fas fa-shield-alt"></i>
                <span>Pago 100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto; 