const express = require('express');
const router = express.Router();
const getNameFolder = require('../utils/getEntities.js')

router.get('/', (req, res) => {
    const folder = 'src/assets/data';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/accesories', (req, res) => {
    const folder = 'src/assets/data/accesories';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
});

router.get('/achievements', (req, res) => {
    const folder = 'src/assets/data/achievements';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/armor', (req, res) => {
    const folder = 'src/assets/data/armor';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/biomes',  (req, res) => {
    const folder = 'src/assets/data/biomes';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/blocks', (req, res) => {
    const folder = 'src/assets/data/blocks';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/bosses', (req, res) => {
    const folder = 'src/assets/data/bosses';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/events', (req, res) => {
    const folder = 'src/assets/data/events';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/game-modes', (req, res) => {
    const folder = 'src/assets/data/game-modes';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/monsters', (req, res) => {
    const folder = 'src/assets/data/monsters';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/npcs', (req, res) => {
    const folder = 'src/assets/data/npcs';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/pets',(req, res) => {
    const folder = 'src/assets/data/pets';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/suits', (req, res) => {
    const folder = 'src/assets/data/suits';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('tools', (req, res) => {
    const folder = 'src/assets/data/tools';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

router.get('/weapons', (req, res) => {
    const folder = 'src/assets/data/weapons';
    getNameFolder(folder)
        .then((nameFolder) => res.send(JSON.stringify(nameFolder)))
        .catch((error) => console.error(error));
})

module.exports = router;
