const MercorUser = require("../models/MercorUser");
const Skill = require("../models/Skills");
const MercorUserSkill = require("../models/MercorUserSkills");
const UserResume = require("../models/UserResume");
const WorkExperience = require("../models/WorkExperience");
const Education = require("../models/Education");
const PersonalInformation = require("../models/PersonalInformation");

module.exports = function setupAssociations() {
  // MercorUser associations

  MercorUser.hasOne(UserResume, {
    foreignKey: "userId",
    as: "resume",
    onDelete: "CASCADE",
  });

  MercorUser.belongsToMany(Skill, {
    through: MercorUserSkill,
    foreignKey: "userId",
    otherKey: "skillId",
  });

  Skill.belongsToMany(MercorUser, {
    through: MercorUserSkill,
    foreignKey: "skillId",
    otherKey: "userId",
  });

  // Additionally, we establish associations for MercorUserSkills
  MercorUserSkill.belongsTo(MercorUser, {
    foreignKey: "userId",
  });

  MercorUserSkill.belongsTo(Skill, {
    foreignKey: "skillId",
  });

  // Optionally, you can also define the inverse relationships:
  MercorUser.hasMany(MercorUserSkill, { foreignKey: "userId" });
  Skill.hasMany(MercorUserSkill, { foreignKey: "skillId" });

  // UserResume associations
  UserResume.hasOne(PersonalInformation, {
    foreignKey: "resumeId",
    as: "personalInformation", // Alias for PersonalInformation
    onDelete: "CASCADE",
  });

  UserResume.hasMany(WorkExperience, {
    foreignKey: "resumeId",
    as: "workExperiences", // Alias for WorkExperience
    onDelete: "CASCADE",
  });

  UserResume.hasMany(Education, {
    foreignKey: "resumeId",
    as: "educations",
    onDelete: "CASCADE",
  });

  // PersonalInformation associations
  PersonalInformation.belongsTo(UserResume, {
    foreignKey: "resumeId",
    as: "resume",
  });

  // WorkExperience associations
  WorkExperience.belongsTo(UserResume, {
    foreignKey: "resumeId",
    as: "resume",
  });

  // Education associations
  Education.belongsTo(UserResume, {
    foreignKey: "resumeId",
    as: "resume",
  });
};
