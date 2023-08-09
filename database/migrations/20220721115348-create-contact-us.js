'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ContactUs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "name is required"},
                },
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "email is required"},
                },
            },
            subject: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "subject is required"},
                },
            },
            message: {
                type: Sequelize.TEXT,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "message is required"},
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
        await queryInterface.dropTable('ContactUs');
    }
};