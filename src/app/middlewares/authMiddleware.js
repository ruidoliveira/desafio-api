const jwt = require('jsonwebtoken');
const secret = 'admin';

class AuthMiddleware {

    async verifyyJWT(req, res, next){
        const token = req.headers['x-access-token'];
        jwt.verify(token, secret, (err, decoded) =>{
            if(err) return res.status(401).send({error: 'Token invalid'});

            req.userId = decoded.userId;
            next();
        })
    }

}

module.exports = new AuthMiddleware();
