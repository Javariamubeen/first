'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Testmonials extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Testmonials.init({
        client_name: DataTypes.STRING,
        project_name: DataTypes.STRING,
        rating: DataTypes.INTEGER,
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Testmonials',
    });
    return Testmonials;
};