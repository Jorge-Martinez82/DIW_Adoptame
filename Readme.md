"dev": "npx tailwindcss -i ./assets/css/input.css -o ./dist/css/styles.css --watch",
"build": "npx tailwindcss -m ./assets/css/input.css -o ./dist/css/styles.css",
"client": "http-server -a localhost -p 8000",
"server": "json-server --watch ./backend/backend.json",
"start": "concurrently \"npm run client\" \"npm run server\" \"npm run dev\""

Ejecutar el comando más adecuado
