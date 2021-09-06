const jwt = require('jsonwebtoken');
const secret = 'admin';


class AuthControllers {

    async authwithToken(req, res){
        try{
            const token = jwt.sign({ userId: 1}, secret,{ expiresIn: 300});
            return res.json({ auth: true, token});
        }catch(err){
            res.status(400).send({error: err.message});
        }
    }
}

module.exports = new AuthControllers();