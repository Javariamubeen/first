'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_name: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "user_name is required"},
                },
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "password is required"},
                },
            },
            role: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'created_at'
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                field: 'updated_at'
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    }
};