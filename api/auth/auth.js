const jwt = require("jsonwebtoken");

exports.auth = function verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization
    console.log(bearerHeader)
    if (typeof bearerHeader != 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1]
        req.token = bearerToken
        console.log(req.token)
    }
    jwt.verify(req.token, process.env.JWT_SECRET, (err) => {
        if (err) {
            console.log(err)
            res.sendStatus(403);
        } else {
            next();
        }
    })

}
