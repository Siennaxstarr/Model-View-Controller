// models/dish.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Comment extends Model {}

Comment.init({
  
  comment: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  // Add any other attributes as needed
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  blog_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'blog',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Dish'
});

module.exports = Dish;
