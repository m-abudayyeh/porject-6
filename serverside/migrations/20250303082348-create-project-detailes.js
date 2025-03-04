'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projectDetailes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      organization: {
        type: Sequelize.STRING
      },
      targetAmount: {
        type: Sequelize.FLOAT
      },
      currentAmount: {
        type: Sequelize.FLOAT
      },
      supportAmount: {
        type: Sequelize.FLOAT
      },
      donorsCount: {
        type: Sequelize.INTEGER
      },
      progress: {
        type: Sequelize.FLOAT
      },
      isCompleted: {
        type: Sequelize.BOOLEAN
      },
      youtubeUrl: {
        type: Sequelize.STRING
      },
      whySupport: {
        type: Sequelize.TEXT
      },
      adminapprove: {
        type: Sequelize.BOOLEAN
      },
      photo1Url: {
        type: Sequelize.STRING
      },
      photo2Url: {
        type: Sequelize.STRING
      },
      photo3Url: {
        type: Sequelize.STRING
      },
      photo4Url: {
        type: Sequelize.STRING
      },
      photo5Url: {
        type: Sequelize.STRING
      },
      photo6Url: {
        type: Sequelize.STRING
      },
      photo7Url: {
        type: Sequelize.STRING
      },
      photo8Url: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('projectDetailes');
  }
};