var express =require('express');
var router = express.Router();
var ticketController = require("../src/controllers/api/ticketController.js")

router.get('/',ticketController.api)

module.exports=router;