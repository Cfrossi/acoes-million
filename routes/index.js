var express = require('express');
var router = express.Router();
const HomeController = require("../app/controllers/home_controller");
const AcoesController = require("../app/controllers/acoes_controller");

router.get("/", HomeController.index);
router.get("/", AcoesController.index);

module.exports = router;

