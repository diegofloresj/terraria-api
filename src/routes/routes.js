const express = require('express');
const router = express.Router();

router.get('/productos', (req, res) => {
    const productos =  require('../assets/data/products.json')
    res.send(productos)
});

router.get('/users', (req, res) => {
    const users =  require('../assets/data/users.json')
    res.send(users)
});

module.exports = router;
