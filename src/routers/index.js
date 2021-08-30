const { Router } = require('express');
const ProjectController = require('../app/controllers/projectControllers');

const routes = new Router();

routes.get('/', (req,res) => {
    res.send({message: 'Connected ✅'});
});

//ProjectController
routes.post('/api/', ProjectController.getInfoByName);

module.exports = routes;