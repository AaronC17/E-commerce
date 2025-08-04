// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Esquema del producto
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

// Endpoint para obtener productos
app.get('/api/productos', async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
