const jwt =require("jsonwebtoken");

const Resister = require("../db/models/modReg")

const auth =async (req, res, next) => {

    try {
        const token = req.header('x-access-token')
        console.log("this middle tokewn " + token);
        const tokenVerification =await jwt.verify(token,process.env.PrivateKey);
        next();
    }
    catch (err) {
        console.error(err)
    }
    

}

module.exports = auth;