const express = require('express');
const {
    createAttraction,
    getAttraction,
    getAttractions
} = require('../controller/attractionsController');


const router = express.Router();

//all attractions
router.get('/', getAttractions);

//single attraction
router.get('/:category', getAttraction);

//add new attraction
router.post('/', createAttraction);


module.exports = router