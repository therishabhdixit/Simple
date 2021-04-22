const express = require('express')
const router = express.Router();

// @route  Get api/users
// @desc Get all users contacts
// @acess Private

router.get('/', (req, res) => {
    res.send('Get all conatacts');
});

// @route  Get api/contacts
// @desc Add new contacts
// @acess Private

router.post('/', (req, res) => {
    res.send('Add conatact');
});

// @route  Put api/contacts/:id
// @desc update contacts
// @acess Private

router.put('/:id', (req, res) => {
    res.send('Update contact');
});

// @route  Delete api/contacts/:id
// @desc Delete contacts
// @acess Private

router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;