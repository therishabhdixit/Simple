const express = require('express')
const router = express.Router();

// @route  GET api/auth
// @desc Get logged in user
// @acess Private

router.get('/', (req, res) => {
    res.send('Get logged in user');
});

module.exports = router;



// @route  POST api/auth
// @desc Auth user & get Token
// @acess Public

router.post('/', (req, res) => {
    res.send('log in user');
});

module.exports = router;