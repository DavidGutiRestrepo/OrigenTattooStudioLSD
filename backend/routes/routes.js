const express = require('express');
const router = express.Router();

const controllerClients = require('../controller/clients.controller');
const controllerBooking = require('../controller/booking.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattoo = require('../controller/tattoo.controller');
const controllerUser = require('../controller/users.controller');


/**
 * @swagger 
 * components:
 *  schemas:
 *    Client:
 *      type: object
 *      properties: 
 *          nombre:
 *            type: string
 *            description: El nombre del cliente
 * 
 *          apellido:
 *             type: string
 *             description: El apellido del cliente
 * 
 *          celular:
 *           type: integer
 *           description: El celular del cliente
 * 
 *          documento:
 *           type: string
 *           description: El documento del cliente
 *          
 *          correo:
 *           type: string
 *           description: El correo del cliente
 *          
 *          fechaNacimiento:
 *           type: string
 *           description: La fecha de nacimiento del cliente
 * 
 *          alergias:
 *           type: string
 *           description: La o las alergias del cliente
 *          
 *          idTatuaje: 
 *           type: string 
 *           description: Tatuaje pedido por el cliente
 * 
 *          idPiercing:
 *           type: string
 *           description: Piercing pedido por el cliente
 * 
 *          contrasena:
 *            type: string
 *            description: La contraseña del cliente
 * 
 *      required:
 *         -nombre
 *         -apellido
 *         -celular
 *         -documento
 *         -correo
 *         -fechaNacimiento
 *         -alergias
 *         -idTatuaje
 *         -idPiercing
 *         -contrasena
 *      example:
 *        nombre: David
 *        apellido: Gutierrez 
 *        celular: 3147746834
 *        documento: 1001362779
 *        correo: dprince@gmail.com
 *        fechaNacimiento: 04/03/2002
 *        alergias: Ninguna
 *        idTatuaje: 0
 *        idPiercing: 1
 *        contrasena: 10123456  
 *           
 */

/**
 * @swagger
 * /api/v1/newclient:
 *  post:
 *      sumamry: create a new client
 *      tags: [Clients]
 *      requestBody:
 *          required: true
 *          content:    
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Client'
 *      responses:
 *          200:
 *            description: Nuevo usuario creador!
 */

/**
 * @swagger
 * /api/v1/showclient:
 *  get:
 *      sumamry: return all clients
 *      tags: [Clients]
 *      responses:
 *          200:
 *            description: all users!
 *            content:
 *              appllication/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Client'
 *                     
 */
/**
 * @swagger
 * /api/v1/showclient/{id}:
 *    get:
 *      sumamry: return  client
 *      tags: [Clients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the client id
 *      responses:
 *          200:
 *            description: all clients!
 *            content:
 *              appllication/json:
 *                 schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Client'
 *          404:
 *            description: user not found
 *                     
 */
/**
 * @swagger
 * /api/v1/deleteclient/{id}:
 *    delete:
 *      sumamry: return  client
 *      tags: [Clients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the client id
 *      responses:
 *          200:
 *            description: user delete
 *            
 *          404:
 *            description: user not found
 *                     
 */
//client
router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.post('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);


/**
 * @swagger 
 * components:
 *  schemas:
 *     Tattoo:
 *      type: object
 *      properties: 
 *          nombre:
 *            type: string
 *            description: El nombre del tatuaje
 * 
 *          descripcion:
 *             type: string
 *             description: La descripcion del tatuaje
 * 
 *          tamano:
 *           type: string
 *           description: El tamaño del tatuaje
 * 
 *          Autor:
 *           type: string
 *           description: El autor del tatuaje
 *          
 *          imagen:
 *           type: string
 *           description: La imagen del tatuaje
 *          
 *     
 * 
 *      required:
 *         -nombre
 *         -descripcion
 *         -tamano
 *         -color
 *         -tecnica
 *         -autor
 *         -imagen
 *      example:
 *        nombre: Demino del mar
 *        descripcion: Calamar de grandes tentaculos sobre el agua
 *        tamano: 30cm
 *        color: negro y blanco
 *        tecnica: Clasico
 *        imagen: url de la imagen
 *        
 *           
 */
/**
 * @swagger
 * /api/v1/newtattoo:
 *  post:
 *      sumamry: create a new tattoo
 *      tags: [Tattoo]
 *      requestBody:
 *          required: true
 *          content:    
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Tattoo'
 *      responses:
 *          200:
 *            description: Nuevo tatuaje creador!
 */
/**
 * @swagger
 * /api/v1/showtattoo:
 *  get:
 *      sumamry: return all tattoo
 *      tags: [Tattoo]
 *      responses:
 *          200:
 *            description: all tattoos!
 *            content:
 *              appllication/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Tattoo'
 *                     
 */
/**
 * @swagger
 * /api/v1/showtattoo/{id}:
 *    get:
 *      sumamry: return  tattoo
 *      tags: [Tattoo]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the tattoo id
 *      responses:
 *          200:
 *            description: all tattoo!
 *            content:
 *              appllication/json:
 *                 schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Tattoo'
 *          404:
 *            description: tattoo not found
 *                     
 */
/**
 * @swagger
 * /api/v1/deletetattoo/{id}:
 *    delete:
 *      sumamry: return  tattoo
 *      tags: [Tattoo]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the tattoo id
 *      responses:
 *          200:
 *            description: tattoo delete
 *            
 *          404:
 *            description: tattoo not found
 *                     
 */
/**
 * @swagger
 * /api/v1/updatetattoo:
 *  put:
 *      sumamry: return  tattoo
 *      tags: [Tattoo]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: the tattoo id
 *      requestBody:
 *          required: true
 *          content:    
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/Tattoo'
 *      responses:
 *          200:
 *            description: Tattoo updated
 * 
 *          404:
 *            description: tattoo not found
 */

// tattoo
router.get('/showtattoo', controllerTattoo.showTattooController);
router.post('/newtattoo', controllerTattoo.createTattooController);
router.post('/updatetattoo', controllerTattoo.updateTattooController);
router.delete('/deletetattoo', controllerTattoo.deleteTattooController);


// users
router.get('/showuser', controllerUser.showUserController);
router.post('/newuser', controllerUser.createUserController);
router.post('/updateuser', controllerUser.updateUserController);
router.delete('/deleteuser', controllerUser.deleteUserController);

router.post('/newbooking', controllerBooking.createBookingController);
router.post('/newpiercing', controllerPiercings.createPiercingController);
module.exports = router;
