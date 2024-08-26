const MercorUserSkill = require("../models/MercorUserSkills");
const PersonalInformation = require("../models/PersonalInformation");
const WorkExperience = require("../models/WorkExperience");
const UserResume = require("../models/UserResume");
const MercorUser = require("../models/MercorUser");
const Skill = require("../models/Skills");

const { Op } = require("sequelize");
const { candidatesItemToObjMapper } = require("../itemToObjMapper");

const getCandidatesBySkillAndName = async (
  skillName,
  searchText,
  limit,
  offset
) => {
  const whereConditions = {};

  if (skillName) {
    const skills = await Skill.findAll({
      attributes: ["skillId"],
      where: {
        skillName: skillName,
      },
    });

    const skillIds = skills.map((skill) => skill.skillId);

    // Fetch user IDs based on the skill IDs
    const userSkills = await MercorUserSkill.findAll({
      attributes: ["userId"],
      where: {
        skillId: {
          [Op.in]: skillIds,
        },
      },
      group: ["userId"],
    });

    const userIds = userSkills.map((userSkill) => userSkill.userId);

    whereConditions.userId = {
      [Op.in]: userIds,
    };
  }

  if (searchText) {
    whereConditions.name = {
      [Op.like]: `%${searchText}%`,
    };
  }

  // Fetch the user details
  return await MercorUser.findAll({
    limit,
    offset,
    attributes: [
      "userId",
      "name",
      "email",
      "phone",
      "profilePic",
      "residence",
      "summary",
      "fullTime",
      "partTime",
    ],
    include: [
      {
        model: MercorUserSkill,
        attributes: ["isPrimary", "order"],
        include: [
          {
            model: Skill,
            attributes: ["skillId", "skillName", "skillValue"],
          },
        ],
      },
      {
        model: UserResume,
        as: "resume",
        include: [
          {
            model: PersonalInformation,
            attributes: ["location"],
            as: "personalInformation",
          },
          {
            model: WorkExperience,
            attributes: ["company", "startDate", "endDate", "role"],
            as: "workExperiences",
          },
        ],
      },
    ],
    where: whereConditions,
  })
    .then((users) => {
      return users.map((user) => {
        return candidatesItemToObjMapper(user);
      });
    })
    .catch((err) => {
      console.error("Error fetching users", err);
    });
};

module.exports = {
  getCandidatesBySkillAndName,
};
