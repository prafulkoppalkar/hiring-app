const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PersonalInformation = sequelize.define(
  "PersonalInformation",
  {
    personalInformationId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    location: DataTypes.JSON,
    email: DataTypes.JSON,
    phone: DataTypes.JSON,
    resumeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "PersonalInformation",
    timestamps: false,
  }
);

module.exports = PersonalInformation;
