const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProductoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  imagen: String,
  categoria: String,
  descripcion: String,
  tallas: [String],
  colores: [String],
});

const Producto = mongoose.model('Producto', ProductoSchema);

const productos = [
  { 
    nombre: 'Jogger Beige Volcom', 
    precio: 12000, 
    imagen: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=400&q=80',
    categoria: 'Pantalones',
    descripcion: 'Jogger beige volcom con acabados de máxima calidad',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Beige', 'Negro', 'Gris']
  },
  { 
    nombre: 'Camisa Oversize', 
    precio: 9000, 
    imagen: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=400&q=80',
    categoria: 'Camisas',
    descripcion: 'Camisa oversize de algodón premium',
    tallas: ['S', 'M', 'L'],
    colores: ['Blanco', 'Azul', 'Negro']
  },
  {
    nombre: 'T-shirt Amarillo',
    precio: 7000,
    imagen: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    categoria: 'T-shirts',
    descripcion: 'T-shirt amarillo vibrante, ideal para verano',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Amarillo', 'Blanco', 'Negro']
  },
  {
    nombre: 'Pantalón Cargo',
    precio: 15000,
    imagen: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80',
    categoria: 'Pantalones',
    descripcion: 'Pantalón cargo resistente y cómodo',
    tallas: ['28', '30', '32', '34'],
    colores: ['Verde', 'Negro', 'Beige']
  },
  {
    nombre: 'Hoodie Negro',
    precio: 11000,
    imagen: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=400&q=80',
    categoria: 'Hoodies',
    descripcion: 'Hoodie negro clásico, suave y abrigado',
    tallas: ['M', 'L', 'XL'],
    colores: ['Negro', 'Gris', 'Azul']
  },
  {
    nombre: 'Camisa Cuadros',
    precio: 9500,
    imagen: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=400&q=80',
    categoria: 'Camisas',
    descripcion: 'Camisa de cuadros para un look casual',
    tallas: ['S', 'M', 'L'],
    colores: ['Rojo/Azul', 'Verde/Amarillo', 'Negro/Blanco']
  },
  {
    nombre: 'Jeans Slim Fit',
    precio: 13000,
    imagen: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80',
    categoria: 'Pantalones',
    descripcion: 'Jeans slim fit con stretch para mayor comodidad',
    tallas: ['28', '30', '32', '34', '36'],
    colores: ['Azul', 'Negro', 'Gris']
  },
  {
    nombre: 'Sudadera con Capucha',
    precio: 12500,
    imagen: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    categoria: 'Hoodies',
    descripcion: 'Sudadera con capucha perfecta para el día a día',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Gris', 'Negro', 'Azul']
  },
  {
    nombre: 'Polo Clásico',
    precio: 8500,
    imagen: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80',
    categoria: 'T-shirts',
    descripcion: 'Polo clásico de algodón pima de alta calidad',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Blanco', 'Azul', 'Negro', 'Rojo']
  }
];

Producto.insertMany(productos)
  .then(() => {
    console.log('Productos insertados con éxito.');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error al insertar productos:', err);
    mongoose.connection.close();
  });
