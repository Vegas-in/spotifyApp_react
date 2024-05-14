
![spotifyAppJPG](https://github.com/Vegas-in/spotifyApp_react/assets/158770667/682fb22f-11ac-4316-854a-992953437fe8)![spotifyApp2](https://github.com/Vegas-in/spotifyApp_react/assets/158770667/91d7be46-80f9-4da6-9ca6-bc2faac8b0e3)


¡Bienvenido a SpotifyApp!

Este proyecto es una aplicación web similar a Spotify, que consta de dos repositorios: uno de React y otro de Node con Express. La aplicación utiliza diversas tecnologías para ofrecerte una experiencia completa y robusta.

Tecnologías Utilizadas
API REST con Express y React: Utilizamos Express en el backend para crear una API RESTful que se comunica con el frontend de React.
CRUD de los datos: Implementamos operaciones CRUD (Create, Read, Update, Delete) para las partes mínimas de la aplicación, permitiendo gestionar los datos de manera completa.
Base de Datos PostgreSQL: Utilizamos PostgreSQL como base de datos para almacenar y gestionar los datos de la aplicación de forma eficiente y segura.
Paginación: Implementamos la paginación para organizar y presentar grandes conjuntos de datos de manera más manejable y amigable para el usuario.
Comunicación sibling-sibling: Implementamos la comunicación entre componentes hermanos para compartir datos y actualizar la interfaz de usuario de manera eficiente.
Hooks de React: Utilizamos varios hooks de React, como useState, useEffect, useContext, useParams y useRef, para gestionar el estado, efectos secundarios, contexto, parámetros de ruta y referencias, respectivamente.
Enrutamiento: Utilizamos enrutamiento para navegar entre diferentes vistas y componentes de la aplicación de manera fluida y organizada.
Sass: Utilizamos Sass como preprocesador de CSS para escribir estilos más estructurados y mantenibles.
Mobile First - Media Queries: Diseñamos la aplicación con enfoque "Mobile First", asegurándonos de que sea completamente funcional y estéticamente agradable en dispositivos móviles, y aplicamos media queries para adaptarla a diferentes tamaños de pantalla.
Semántica HTML5: Utilizamos etiquetas semánticas HTML5 para mejorar la accesibilidad y la comprensión del contenido por parte de los motores de búsqueda y los usuarios.
Filtros de Búsqueda/Ordenación: Implementamos filtros de búsqueda y ordenación para facilitar la búsqueda y organización de datos.
Manejo de Formularios: Implementamos formularios para capturar y procesar datos de entrada del usuario de manera eficiente y segura.
Proyecto en GitHub y Utilización de Ramas: Mantenemos el proyecto en GitHub y utilizamos ramas para gestionar y colaborar en el desarrollo de manera estructurada y ordenada.
Fase 1
En la Fase 1 de la aplicación, hemos implementado un home que incluye un componente de sugerencias y un buscador de canciones que realiza llamadas a la API. Las canciones buscadas se muestran con un filtro de ordenación y paginación. Cada tarjeta de canción muestra la imagen, el nombre y el nombre del artista, junto con un botón que enlaza con Spotify para reproducir la canción. Al hacer clic en la imagen de la canción, se redirige a otra vista llamada "Detail" que muestra los detalles de la canción, así como detalles del álbum, como el año de lanzamiento y todas las canciones del álbum.

En el header, además del buscador, hay dos botones: uno para redireccionar al Home y otro para ir a la vista de registro, que enlaza con el proyecto de back-end en Node y Express para guardar usuarios.

Fase 2 (Próximamente)
En la Fase 2 de la aplicación, implementaremos un botón "Añadir a Playlist" en las tarjetas de canciones. También implementaremos un sistema de login en la sección de registro.

¡Gracias por explorar SpotifyApp! Siéntete libre de contribuir y mejorar este proyecto.
