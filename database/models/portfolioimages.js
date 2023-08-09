'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PortfolioImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Portfolio,{
        foreignKey:  "portfolio_id"
      })
    }
  }
  PortfolioImages.init({
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PortfolioImages',
  });
  return PortfolioImages;
};