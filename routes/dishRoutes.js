// routes/dishRoutes.js

const express = require('express');
const dishController = require('../controllers/dishController');

const router = express.Router();

// Route to get all dishes
router.get('/', dishController.getAllDishes);

// Route to create a new dish
router.post('/', dishController.createDish);

// Route to get a single dish by ID
router.get('/:id', dishController.getDishById);

// Route to update a dish by ID
router.put('/:id', dishController.updateDish);

// Route to delete a dish by ID
router.delete('/:id', dishController.deleteDish);

module.exports = router;
