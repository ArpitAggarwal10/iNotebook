const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = process.env.JWT_SECRET || "Arpitisagoodb$oy";

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser", [
    body("name", "Enter A Valid Name (Minimum 3 Characters).").isLength({ min: 3 }),
    body("email", "Enter A Valid Email Address.").isEmail(),
    body("password", "Password Must Be At Least 5 Characters.").isLength({ min: 5 }),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success: false, error: "A User With This Email Already Exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email,
        });

        const data = {
            user: {
                id: user.id,
            },
        };

        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, error: "Internal Server Error!" });
    }
});

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post("/login", [
    body("email", "Enter A Valid Email!").isEmail(),
    body("password", "Password Cannot Be Blank!").exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Incorrect Email Or Password!" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            return res.status(400).json({ error: "Incorrect Email Or Password!" });
        }

        const data = {
            user: {
                id: user.id,
            },
        };

        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
});

// ROUTE 3: Get logged-in User Details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
});

module.exports = router;