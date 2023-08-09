'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Services', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            image: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "image is required"},
                },
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "title is required"},
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
        await queryInterface.dropTable('Services');
    }
};