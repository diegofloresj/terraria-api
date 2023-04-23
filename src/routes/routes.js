const express = require('express');
const router = express.Router();
const fs = require('fs');
const {
    getTypes,
    getAviableEntities,
    getEntity
} = require('../utils/files.js')

router.get('/', (req, res) => {
    const folder = 'assets/data';
    getTypes(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/:type', (req, res) => {
    const folder = `assets/data/${req.params.type}`;
    getAviableEntities(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/:type/:cat', (req, res) => {
    const folder = `assets/data/${req.params.type}/${req.params.cat}`;
    getAviableEntities(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/:type/:cat/:name', async (req, res) => {

    const folder = `assets/data/${req.params.type}/${req.params.cat}/${req.params.name}`;
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
        // Query data (lang)
        if (req.query.hasOwnProperty('lang')) {
            const lang = req.query.lang;
            const jsonLang = entities.find(entity => entity.name === `${lang}.json` && !entity.isDirectory);

            const jsonDataLang = await new Promise((resolve, reject) => {
                fs.readFile(jsonLang.path, 'utf-8', (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                })
            })
            res.send(jsonDataLang)
        } else {
            res.send(jsonData);
        }

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

module.exports = router;