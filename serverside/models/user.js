"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.Donor, { foreignKey: "userId" });
      this.hasMany(models.Donation, { foreignKey: "donorId" });
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("donor", "beneficiary", "admin"), // تغيير إلى ENUM كما في الـ migration
        allowNull: false,
        defaultValue: "donor", // تعيين القيمة الافتراضية للدور
      },
      status: {
        type: DataTypes.ENUM("pending", "approved"), // تغيير إلى ENUM كما في الـ migration
        allowNull: false,
        defaultValue: "pending", // تعيين القيمة الافتراضية للحالة
      },
      phoneNumber: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.TEXT,
        defaultValue: "unknown", // تعيين القيمة الافتراضية للعنوان
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
