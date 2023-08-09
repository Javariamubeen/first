'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PortfolioImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      portfolio_id:{
        type:Sequelize.INTEGER
      },
      images: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "image is required"},
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
    await queryInterface.dropTable('PortfolioImages');
  }
};