var express = require('express');
var router = express.Router();
const ProcutsController = require("../controllers/ProductsController");

router.get('/', ProcutsController.getAllProduct)
router.post('/criar', ProcutsController.createProducts)

module.exports = router;
