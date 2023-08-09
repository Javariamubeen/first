'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('FAQs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            question: {
                type: Sequelize.TEXT,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "question is required"},
                },
            },
            answer: {
                type: Sequelize.TEXT,
                allowNull: false,
                required: true,
                validate: {
                    notNull: {msg: "answer is required"},
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
        await queryInterface.dropTable('FAQs');
    }
};