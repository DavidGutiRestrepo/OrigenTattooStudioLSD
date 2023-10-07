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
 * /api/v1/:
 *  post:
 *      sumamry: create a new client
 *      tags: [Client]
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
//client
router.get('/showclient', controllerClients.showClientController);
router.post('/newclient', controllerClients.createClientController);
router.post('/updateclient', controllerClients.updateClientController);
router.delete('/deleteclient', controllerClients.deleteClientController);



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
