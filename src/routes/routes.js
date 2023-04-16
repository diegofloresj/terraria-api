const express = require('express');
const router = express.Router();

router.get('/weapons', (req, res) => {
    const productos =  require('../assets/data/weapons/magic/magicWeapons.json')
    res.send(productos)
});

// router.get('/users', (req, res) => {
//     const users =  require('../assets/data/users.json')
//     res.send(users)
// });

module.exports = router;
