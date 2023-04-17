const express = require('express');
const router = express.Router();
const fs = require('fs');
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

//WEAPONS ROUTES
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
router.get('/weapons/:type/:mode/:name', async (req, res) => {
    const folder = `src/assets/data/weapons/${req.params.type}/${req.params.mode}/${req.params.name}`;
    try {
        const entities = await getEntity(folder);
        const jsonEntity = entities.find(entity => entity.name === 'en.json' && !entity.isDirectory);
        if (!jsonEntity) {
            throw new Error('No specified entity found');
        }
        const jsonData = await new Promise((resolve, reject) => {
            fs.readFile(jsonEntity.path, 'utf8', (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });
        console.log(jsonEntity);
        res.send(jsonData);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

module.exports = router;