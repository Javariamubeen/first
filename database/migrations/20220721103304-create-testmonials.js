'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Testmonials', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            client_name: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "client_name is required"},
                },
            },
            project_name: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "project_name is required"},
                },
            },
            rating: {
                type: Sequelize.INTEGER,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "rating is required"},
                },
            },
            description: {
                type: Sequelize.TEXT,
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
        await queryInterface.dropTable('Testmonials');
    }
};