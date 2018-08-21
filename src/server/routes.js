const express = require('express');

const router = express.Router();

const dictionary_controller = require('./controllers/dictionary');

// test route to make sure everything is working (accessed at GET http://localhost:5000/api)
router.get('/', (req, res) => {
  res.json({ message: 'Hello! welcome to our api!' });
});

router.get('/word/:word', dictionary_controller.get_word);
router.get('/idiom1/:abbr', dictionary_controller.get_idiom1);
router.get('/idiom2/:word', dictionary_controller.get_idiom2);
router.get('/xiehouyu/:riddle', dictionary_controller.get_xiehouyu);

module.exports = router;
