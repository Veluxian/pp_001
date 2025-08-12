# Usa la imagen oficial de Node.js en la versión que necesitas
FROM node:20.19.2

# Establece la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias (React, Axios, etc.)
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto que usará React (3000 por defecto)
EXPOSE 3000

# Comando por defecto para levantar la app
CMD ["npm", "start"]