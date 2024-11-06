# Wine Store App

Esta aplicación es un e-commerce de vinos desarrollada en React, usando Firebase como base de datos. Los usuarios pueden navegar por diferentes categorías, ver detalles de cada producto, agregar al carrito, y realizar una compra, que le devuelve un ID para futuro seguimiento.

## Características

- **Catálogo de vinos**: Muestra una lista de vinos categorizada en diferentes tipos (tinto, blanco, rosado, espumante y postre) en la barra de navegación.
- **Detalles de producto**: Puede ingresar a la página de detalles de cada vino y seleccionar la cantidad deseada para agregar al carrito de compras.
- **Carrito de compras**:
  - Visualización en tiempo real de la cantidad de productos agregados en el widget del carrito en la barra de navegación.
  - Página del carrito que muestra los productos seleccionados, la cantidad, el subtotal y el total de la compra antes de finalizar con la misma.
- **Firebase**:
  - Base de datos para almacenar la colección de productos.
  - Base de datos para almacenar la colección de órdenes, el carrito permite registrar cada compra realizada, devolviendo un ID de la misma.
  
## Tecnologías Usadas

- **React**: para construir la interfaz de usuario.
- **Firebase**: para almacenamiento de productos y órdenes de compra.

## Componentes Principales

1. **NavBar**: Barra de navegación que permite filtrar los vinos por categoría; contiene el carrito mostrando la cantidad de productos agregados.
2. **Content**: Componente que muestra la lista de vinos filtrada por categoría.
3. **WineDetails**: Componente que muestra información detallada de cada vino en específico y permite agregarlo al carrito.
4. **Cart**: Componente que muestra los productos agregados al carrito, con el total de la compra y opción para confirmar la misma.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/GuidoGiacomini/ProyectoFinal-Giacomini.git
   
2. Instala dependencias:
   ```bash
   npm install
3. Visualiza la página:

    ```bash
    npm run dev
