const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Define la ruta al archivo JSON de definición de OpenAPI
const swaggerDocument = require('./openapi.json'); // Asegúrate de que el nombre del archivo sea correcto

// Configura Swagger con la definición del archivo JSON
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// Agrega tus rutas o lógica de la aplicación aquí
// ...

// Inicia el servidor
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log('La aplicación está funcionando en el puerto ' + port);
});
