const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserResume = sequelize.define(
  "UserResume",
  {
    resumeId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    url: DataTypes.TEXT,
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    source: {
      type: DataTypes.STRING,
      defaultValue: "platform",
    },
    ocrText: DataTypes.TEXT,
    ocrEmail: DataTypes.STRING,
    ocrGithubUsername: DataTypes.STRING,
    resumeBasedQuestions: DataTypes.TEXT,
    userId: {
      type: DataTypes.STRING,
      unique: true,
    },
    isInvitedToInterview: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    reminderTasksIds: DataTypes.JSON,
  },
  {
    tableName: "UserResume",
    timestamps: true,
  }
);

module.exports = UserResume;
