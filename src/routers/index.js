const { Router } = require('express');
const ProjectController = require('../app/controllers/projectControllers');
const AuthController = require('../app/controllers/authControllers');
const {verifyyJWT} = require('../app/middlewares/authMiddleware');
const routes = new Router();



routes.get('/', (req,res) => {
    res.send({message: 'Connected ✅'});
});

//ProjectController
routes.post('/api/',verifyyJWT ,ProjectController.getInfoByName);

//AuthController
routes.post('/login/', AuthController.authwithToken);

module.exports = routes;