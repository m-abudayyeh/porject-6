"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // إنشاء نوع الـ ENUM للحالة
    await queryInterface.sequelize.query(
      "CREATE TYPE \"enum_Users_status\" AS ENUM('pending', 'approved');"
    );

    // إنشاء جدول الـ Users
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM("donor", "beneficiary", "admin"),
        allowNull: false,
        defaultValue: "donor", // تعيين القيمة الافتراضية للدور
      },
      status: {
        type: Sequelize.ENUM("pending", "approved"),
        allowNull: false,
        defaultValue: "pending", // تعيين القيمة الافتراضية للحالة
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.TEXT,
        defaultValue: "unknown", // تعيين القيمة الافتراضية للعنوان
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // حذف الـ ENUM
    await queryInterface.sequelize.query(
      'DROP TYPE IF EXISTS "enum_Users_status";'
    );
    // حذف جدول الـ Users
    await queryInterface.dropTable("Users");
  },
};
