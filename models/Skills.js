const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Skill = sequelize.define(
  "Skill",
  {
    skillId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    skillName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skillValue: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "Skills",
    timestamps: false,
  }
);

module.exports = Skill;
