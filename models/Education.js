const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Education = sequelize.define(
  "Education",
  {
    educationId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    degree: DataTypes.STRING,
    major: DataTypes.STRING,
    school: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    grade: DataTypes.STRING,
    resumeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Education",
    timestamps: false,
  }
);

module.exports = Education;
