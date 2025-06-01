/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",// en que archivos hay clases de tailwind
    "./src/**/*.{js,jsx}"// todas las carpetas todos los archivos con extensión js o jsx para añadir typescript se incluyen ts y tsx
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

