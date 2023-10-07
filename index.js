const express = require('express');
const app = express();
const routes = require('./backend/routes/routes');
require('dotenv').config();
const path=require('path')
const swaggerUI=require('swagger-ui-express');
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerSpec={
  definition:{
    openapi:'3.1.0',
    info:{
      title:'OrigenTattoStudio',
      version:'1.0.0'
    },
    servers:[
      {
      url:'http://localhost:7012'
      }]
  },
  apis:[ `${path.join(__dirname,"./backend/routes/routes.js")}`],
  };

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/v1/', routes);
app.use('/api.doc',swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpec)))
app.listen(process.env.PORT, () => {
  console.log('funciona');
});
