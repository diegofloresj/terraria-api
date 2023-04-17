const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const {
    getTypes,
    getAviableEntities,
    getEntity
} = require('../utils/files.js')


router.get('/', (req, res) => {
    const folder = 'src/assets/data';
    getTypes(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});


router.get('/weapons', (req, res) => {
    const folder = 'src/assets/data/weapons';
    getAviableEntities(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/weapons/:type', (req, res) => {
    const folder = `src/assets/data/weapons/${req.params.type}`;
    getAviableEntities(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/weapons/:type/:mode', (req, res) => {
    const folder = `src/assets/data/weapons/${req.params.type}/${req.params.mode}`;
    getAviableEntities(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/weapons/:type/:mode/:name', (req, res) => {
    const folder = `src/assets/data/weapons/${req.params.type}/${req.params.mode}/${req.params.name}`;
    fs.readdir(folder, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer el directorio');
        } else {
            const fileNames = files.map(file => path.parse(file).name);
            res.send(JSON.stringify(fileNames));
        }
    });
});

module.exports = router;
