const express = require("express");
const router = express.Router();
const { registerUser, getAllUsers } = require("../controllers/userController");

router.post("/register", registerUser);
router.get("/all-users", getAllUsers);

module.exports = router;
