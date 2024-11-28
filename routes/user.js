const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get("/admin", authMiddleware, roleMiddleware("Admin"), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});

router.get("/user", authMiddleware, roleMiddleware("User"), (req, res) => {
    res.json({ message: "Welcome User!" });
});

router.get("/moderator", authMiddleware, roleMiddleware("Moderator"), (req, res) => {
    res.json({ message: "Welcome Moderator!" });
});

module.exports = router;
