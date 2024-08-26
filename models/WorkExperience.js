// models/WorkExperience.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WorkExperience = sequelize.define(
  "WorkExperience",
  {
    workExperienceId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    company: DataTypes.STRING,
    role: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    description: DataTypes.TEXT,
    locationCity: DataTypes.STRING,
    locationCountry: DataTypes.STRING,
    resumeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "WorkExperience",
    timestamps: false,
  }
);

module.exports = WorkExperience;
