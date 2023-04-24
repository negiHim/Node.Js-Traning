const jwt = require('jsonwebtoken');
const SECRET_KEY = 'RESTAPI';

function auth(){
    return (req,res,next)=>{
        try{
            let token = req.headers.token;
            console.log(token)
            if(token){
                token = token.split(' ')[1];
                let customer = jwt.verify(token,SECRET_KEY);
                // Extract email from decoded payload
                const email = customer.email;
                req.customerId = customer.id;
                console.log("customerid"+req.customerId);
                res.status(200).json(
                    {
                    email:email,
                    customerId:customer._d,
                    msg:'success by token',
                    token:jwt.sign({ email: customer.email,customerId: customer.id }, SECRET_KEY, { expiresIn: '2m' })
                
                });
            }else{
                next();
                // res.status(401).json({msg:'Unauthorized Customer'});
                
            }
            
        }catch(err){
            console.log(err);
            next();
            res.status(401).json({msg:'Unauthorized Customer'});
        }
    }
}

//exports module
module.exports = auth;