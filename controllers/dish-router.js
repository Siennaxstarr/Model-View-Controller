// controllers/dishController.js

const { Dish } = require('../models');

const dishController = {
  // Function to retrieve all dishes
  getAllDishes: async (req, res) => {
    try {
      const dishes = await Dish.findAll();
      res.json(dishes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve dishes' });
    }
  },

  // Function to create a new dish
  createDish: async (req, res) => {
    const { title, content, author } = req.body;
    try {
      const newDish = await Dish.create({ title, content, author });
      res.status(201).json(newDish);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create dish' });
    }
  },

  // Function to retrieve a single dish by ID
  getDishById: async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Dish.findByPk(id);
      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      res.json(dish);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve dish' });
    }
  },

  // Function to update a dish
  updateDish: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      const dish = await Dish.findByPk(id);
      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      await dish.update({ title, content });
      res.json(dish);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update dish' });
    }
  },

  // Function to delete a dish
  deleteDish: async (req, res) => {
    const { id } = req.params;
    try {
      const dish = await Dish.findByPk(id);
      if (!dish) {
        return res.status(404).json({ error: 'Dish not found' });
      }
      await dish.destroy();
      res.json({ message: 'Dish deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete dish' });
    }
  }
};

module.exports = dishController;
