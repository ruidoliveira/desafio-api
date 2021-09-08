const express = require('express');
const routes = require('./routers/index.js');
const bodyParser = require('body-parser');
// teste
class App{
    constructor(){
        this.server = express();
        
        this.middleware();
        this.routes();
    }
    middleware(){
        this.server.use(express.json());
        this.server.use(bodyParser.urlencoded({extended: true}));
    }
    routes(){
        this.server.use(routes);
    }
  
}

module.exports = new App().server;