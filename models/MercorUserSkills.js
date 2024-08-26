const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MercorUserSkill = sequelize.define(
  "MercorUserSkill",
  {
    userId: {
      type: DataTypes.STRING,
      references: {
        model: "MercorUsers",
        key: "userId",
      },
      primaryKey: true,
      allowNull: false,
    },
    skillId: {
      type: DataTypes.STRING,
      references: {
        model: "Skills",
        key: "skillId",
      },
      primaryKey: true,
      allowNull: false,
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "MercorUserSkills",
    timestamps: false,
    primaryKey: ["userId", "skillId"],
  }
);

module.exports = MercorUserSkill;
