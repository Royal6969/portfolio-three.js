# Portfolio Three.js

### Creamos una aplicación de React con Vite

Creamos una nueva carpeta para este proyecto y la abrimos con VScode, y una vez dentro, abrimos abrimos una terminal para ejecutar el siguiente comando de npm, seleccionando las opciones de React con Javascript:

```bash
npm create vite@latest ./ -- --template react
```

### Instalar el framework de css de Tailwind

```bash
npm install -D tailwindcss
```

```bash
npx tailwindcss init
```

### Instalamos una serie de dependencias que vamos a utilizar

```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

**Nota:** *--legacy-peer-deps* lo usamos cuando vamos a utilizar algún paquete antiguo, como es en este caso el *react-tilt*, de modo que esto nos provee una lista de todos los paquetes que necesitaríamos para que la compatibilidad sea correcta

## Webgrafía y enlaces de interés

### [1. create react app with vite](https://vitejs.dev/guide/)

### [2. install tailwind](https://tailwindcss.com/docs/installation)