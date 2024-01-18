const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
            if(error) {
                res.status(401);
                throw new Error("Not authorized, token failed");
            } 
            req.user = decoded.user;
            next();

            if(!token) {
                res.status(401);
                throw new Error("Not authorized, no token");
            }
        });
    }
});

module.exports = validateToken;

//this code is a middleware, which will be used in the routes, where we want to validate the token. like see in the contactRoutes.js, we have used this middleware in all the routes, where we want to validate the token. in the contactRoutes we are taking req.user.id for the get method, matlab wo dekhega ki kon maang rha hai data, to the above code has req.user which is making it possible for us to use req.user.id in the contactRoutes.js file.