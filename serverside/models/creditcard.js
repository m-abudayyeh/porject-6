module.exports = (sequelize, DataTypes) => {
  const CreditCard = sequelize.define("CreditCard", {
    cardholder_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    card_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    expiration_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return CreditCard;
};
