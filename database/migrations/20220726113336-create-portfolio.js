'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Portfolios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_name: {
        type: Sequelize.STRING, allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "project_name is required"},
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "description is required"},
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Portfolios');
  }
};