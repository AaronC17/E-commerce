import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  function agregarAlCarrito(producto) {
    setCarrito(prev => {
      const idx = prev.findIndex(
        p => p.id === producto.id && p.color === producto.color && p.talla === producto.talla
      );
      if (idx !== -1) {
        const nuevo = [...prev];
        nuevo[idx].cantidad += producto.cantidad;
        return nuevo;
      }
      return [...prev, producto];
    });
  }

  function quitarDelCarrito(idx) {
    setCarrito(prev => prev.filter((_, i) => i !== idx));
  }

  function actualizarCantidad(idx, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
      quitarDelCarrito(idx);
      return;
    }
    setCarrito(prev => prev.map((item, i) => 
      i === idx ? { ...item, cantidad: nuevaCantidad } : item
    ));
  }

  function limpiarCarrito() {
    setCarrito([]);
  }

  return (
    <CarritoContext.Provider value={{ 
      carrito, 
      agregarAlCarrito, 
      quitarDelCarrito, 
      actualizarCantidad, 
      limpiarCarrito 
    }}>
      {children}
    </CarritoContext.Provider>
  );
} 