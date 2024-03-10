var jwt = require("jsonwebtoken");
const JWT_SECRET = "Arpitisagoodb$oy";

const fetchuser = async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = await req.header("auth-token");
    if (!token) {
        return res.status(401).send({ error: "Please Authenticate Using A Valid Token!" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate Using A Valid Token!" });
    }
}

module.exports = fetchuser;