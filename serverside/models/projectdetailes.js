'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projectDetailes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projectDetailes.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    organization: DataTypes.STRING,
    targetAmount: DataTypes.FLOAT,
    currentAmount: DataTypes.FLOAT,
    supportAmount: DataTypes.FLOAT,
    donorsCount: DataTypes.INTEGER,
    progress: DataTypes.FLOAT,
    isCompleted: DataTypes.BOOLEAN,
    youtubeUrl: DataTypes.STRING,
    whySupport: DataTypes.TEXT,
    adminapprove: DataTypes.BOOLEAN,
    photo1Url: DataTypes.STRING,
    photo2Url: DataTypes.STRING,
    photo3Url: DataTypes.STRING,
    photo4Url: DataTypes.STRING,
    photo5Url: DataTypes.STRING,
    photo6Url: DataTypes.STRING,
    photo7Url: DataTypes.STRING,
    photo8Url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'projectDetailes',
  });
  return projectDetailes;
};