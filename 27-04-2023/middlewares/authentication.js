const jwt = require('jsonwebtoken');
const ACCESS_SECRET_KEY = 'RESTAPI2';

function auth() {
    return (req, res, next) => {
        try {
            let accessToken = req.headers.token;
            if (accessToken) {
                token = accessToken.split(' ')[1];
                let customer = jwt.verify(token, ACCESS_SECRET_KEY);
                if (customer) next();
            }
        } catch (err) { res.status(401).json({ msg: 'Unauthorized Customer || Token expired' }); }
    }
}

//exports module
module.exports = auth;