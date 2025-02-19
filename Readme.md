- [ ] Usando el diseño ya realizado en Figma, desarrollar las siguientes pantallas en HTML y CSS para las versiones móvil y escritorio:

  - [ ] **Página de inicio**:
    - [ ] Encabezado con el nombre del proyecto y un breve texto introductorio que motive la adopción de animales.
    - [ ] Imagen destacada representativa del proyecto (libre de derechos).
    - [ ] Botones de navegación visualmente atractivos y coherentes con el diseño de Figma.

  - [ ] **Listado de animales**:
    - [ ] Diseñar el listado en formato tarjetas, utilizando al menos 9 imágenes diferentes de animales.
    - [ ] Cada tarjeta debe incluir:
      - [ ] Imagen del animal (libre de derechos).
      - [X] Nombre del animal.
      - [ ] Breve descripción (raza, edad, etc.).
      - [ ] Icono de acción (favorito, compartir).
    - [ ] Asegurar que las tarjetas estén bien alineadas y sean coherentes visualmente en móvil y escritorio.

  - [ ] **Pantalla de detalles de un animal**:
    - [ ] Información más detallada del animal seleccionado.
    - [ ] Incluir imagen destacada (libre de derechos) y descripción.
    - [ ] Características específicas (raza, edad, tamaño, etc.).

  - [ ] **Pantalla de contacto**:
    - [ ] Datos de contacto (teléfono, correo electrónico, dirección).
    - [ ] Incluir iconos descriptivos, sin formularios en esta pantalla.

- [ ] **Imágenes libres de derechos**:
  - [ ] Todas las imágenes deben ser libres de derechos (Unsplash, Pexels o Pixabay).
  - [ ] Mínimo de 9 imágenes diferentes de animales en el listado.

- [ ] **Uso de iconos de Google Fonts**:
  - [ ] Implementar todos los iconos con Google Fonts Icons.
  - [ ] Asegurar que los iconos sean relevantes y estén bien integrados en el diseño.

- [ ] **Técnica de Art Direction para las imágenes**  
  - Implementa la técnica de Art Direction para adaptar las imágenes a diferentes resoluciones de pantalla.  
  - Utiliza el elemento `<picture>` para cargar la imagen adecuada según la resolución del dispositivo.  

- [ ] **Maquetación con TailwindCSS**  
  - Utiliza TailwindCSS para realizar la maquetación.  
  - Recuerda que el diseño debe estar optimizado para la versión móvil (máximo 768px) y para escritorio (pantallas más grandes).  

- [ ] **Repositorio GitHub**  
  - Crea un repositorio en GitHub llamado `adoptame-html-css`.  
  - Subir el código al repositorio, organizando las carpetas correctamente (por ejemplo: `index.html`, `css/`, `images/`).  
  - Realiza commits frecuentes con mensajes claros sobre lo que se está implementando (ej.: "Añadida pantalla de inicio", "Diseñadas las tarjetas de animales", etc.).  



"dev": "npx tailwindcss -i ./assets/css/input.css -o ./dist/css/styles.css --watch",
"build": "npx tailwindcss -m ./assets/css/input.css -o ./dist/css/styles.css",
"client": "http-server -a localhost -p 8000",
"server": "json-server --watch ./backend/backend.json",
"start": "concurrently \"npm run client\" \"npm run server\" \"npm run dev\""

Ejecutar el comando más adecuado
