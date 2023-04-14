const express = require('express');
const router = express.Router();

router.get('/ruta-primaria', (req, res) => {
    res.send('Hola desde la ruta principal');
});

router.get('/ruta-secundaria', (req, res) => {
    res.send('Hola desde la ruta secundaria');
});

module.exports = router;
