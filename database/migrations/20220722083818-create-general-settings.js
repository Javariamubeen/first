'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GeneralSettings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projects_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "projects_number is required"},
        },
      },
      enterpise_clients_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "  enterpise_clients_number is required"},
        },
      },
      countries_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "countries_number is required"},
        },
      },
      client_retention_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "client_retention_number is required"},
        },
      },
      linkedin_link: {
        type: Sequelize.TEXT,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "linkedin_link is required"},
        },
      },
      facebook_link: {
        type: Sequelize.TEXT,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "facebook_link is required"},
        },
      },
      instagram_link: {
        type: Sequelize.TEXT,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "instagram_link is required"},
        },
      },
      local_address: {
        type: Sequelize.TEXT,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "local_address is required"},
        },
      },
      international_address: {
        type: Sequelize.TEXT,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "international_address is required"},
        },
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: " phone is required"},
        },
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        validate: {
          notNull: {msg: "mail is required"},
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
    await queryInterface.dropTable('GeneralSettings');
  }
};