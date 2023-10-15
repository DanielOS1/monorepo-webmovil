# Usar una imagen oficial de Node.js con soporte para TypeScript
FROM node:18.17.1

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código fuente del proyecto al contenedor
COPY . .

# Compilar el proyecto TypeScript a JavaScript
RUN npm run build

# Exponer el puerto en el que se ejecutará el microservicio (por defecto NestJS usa el 3000)
EXPOSE 3000

# Copiar el script wait-for-it al contenedor
COPY wait-for-it.sh /usr/wait-for-it.sh

# Otorgar permisos de ejecución al script
RUN chmod +x /usr/wait-for-it.sh

# Comando para ejecutar la aplicación
CMD ["npm", "start:dev"]
