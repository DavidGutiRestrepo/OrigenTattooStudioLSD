const express = require('express');
const router = express.Router();

const controllerClients = require('../controller/clients.controller');
const controllerBooking = require('../controller/booking.controller');
const controllerPiercings = require('../controller/piercings.controller');
const controllerTattoo = require('../controller/tattoo.controller');
const controllerUser = require('../controller/users.controller');

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
