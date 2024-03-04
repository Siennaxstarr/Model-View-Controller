'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('project', 'title', {
      type: Sequelize.STRING,
      allowNull: false
    });
    queryInterface.addColumn('user', 'name', {
      type: DataTypes.STRING,
      allowNull: false
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('project', 'title');
    queryInterface.removeColumn('user', 'name');

  }
};
