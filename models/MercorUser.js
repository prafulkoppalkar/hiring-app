// models/MercorUser.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const MercorUser = sequelize.define(
  "MercorUser",
  {
    userId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    residence: DataTypes.JSON,
    profilePic: DataTypes.TEXT,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    lastLogin: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    notes: DataTypes.TEXT,
    referralCode: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: sequelize.fn("UUID"),
    },
    isGptEnabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    preferredRole: DataTypes.STRING,
    fullTimeStatus: DataTypes.STRING,
    workAvailability: DataTypes.STRING,
    fullTimeSalaryCurrency: DataTypes.STRING,
    fullTimeSalary: DataTypes.STRING,
    partTimeSalaryCurrency: DataTypes.STRING,
    partTimeSalary: DataTypes.STRING,
    fullTime: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    fullTimeAvailability: DataTypes.INTEGER,
    partTime: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    partTimeAvailability: DataTypes.INTEGER,
    w8BenUrl: DataTypes.JSON,
    tosUrl: DataTypes.TEXT,
    policyUrls: DataTypes.JSON,
    isPreVetted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    summary: DataTypes.TEXT,
    preVettedAt: DataTypes.DATE,
  },
  {
    tableName: "MercorUsers",
    timestamps: false,
  }
);

module.exports = MercorUser;
