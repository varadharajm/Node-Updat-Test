const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");

router.post('/adduser',user.createUser);

router.patch('/updateuser/:uid', user.updateUser);

module.exports = router;