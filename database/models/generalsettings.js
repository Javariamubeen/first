'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GeneralSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralSettings.init({
    projects_number: DataTypes.INTEGER,
    enterpise_clients_number: DataTypes.INTEGER,
    countries_number: DataTypes.INTEGER,
    client_retention_number: DataTypes.INTEGER,
    linkedin_link: DataTypes.TEXT,
    facebook_link: DataTypes.TEXT,
    instagram_link: DataTypes.TEXT,
    local_address: DataTypes.TEXT,
    international_address: DataTypes.TEXT,
    phone: DataTypes.STRING,
    mail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GeneralSettings',
  });
  return GeneralSettings;
};