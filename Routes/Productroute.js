const express = require('express');
const Products = require('../controller/Products');
const router = express.Router();

router.post('/add',Products.AddProducts);
router.get('/get',Products.GetAllProduts);
router.get('/search', Products.SearchProducts);


module.exports = router;