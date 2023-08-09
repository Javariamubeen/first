'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Employees', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                required: true,
                allowNull: false,
                validate: {
                    notNull: {msg: "name is required"},
                },
            },
            designation: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "designation is required"},
                },
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "image is required"},
                },
            },
            joining_date: {
                type: Sequelize.DATE,
                required: true,
                allowNull: false,
                validate: {
                    notNull: {msg: "joining_date is required"}
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
        await queryInterface.dropTable('Employees');
    }
};