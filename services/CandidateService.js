const MercorUser = require("../models/MercorUser");
const Skill = require("../models/Skills");
const MercorUserSkill = require("../models/MercorUserSkills");
const UserResume = require("../models/UserResume");
const PersonalInformation = require("../models/PersonalInformation");
const WorkExperience = require("../models/WorkExperience");
const Education = require("../models/Education");
const {
  candidatesDetailsItemToObjMapper,
  candidatesItemToObjMapper,
} = require("../itemToObjMapper");

const getCandidates = async (limit, offset) => {
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
        model: MercorUserSkill, // Join with MercorUserSkills
        attributes: ["isPrimary", "order"],
        include: [
          {
            model: Skill, // Join with Skills
            attributes: ["skillId", "skillName", "skillValue"],
          },
        ],
        required: true, // Converts to INNER JOIN, only return users with associated skills
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

const getCandidateById = async (id) => {
  return await MercorUser.findOne({
    where: { userId: id },
    attributes: [
      "userId",
      "notes",
      "name",
      "email",
      "phone",
      "profilePic",
      "residence",
      "summary",
      "fullTime",
      "fullTimeSalaryCurrency",
      "fullTimeSalary",
      "fullTimeAvailability",
      "partTime",
      "partTimeSalaryCurrency",
      "partTimeSalary",
      "partTimeAvailability",
    ],
    include: [
      {
        model: MercorUserSkill, // Join with MercorUserSkills
        attributes: ["isPrimary", "order"],
        include: [
          {
            model: Skill, // Join with Skills
            attributes: ["skillId", "skillName", "skillValue"],
          },
        ],
        required: true, // Converts to INNER JOIN, only return users with associated skills
      },
      {
        model: UserResume,
        as: "resume",
        attributes: [
          "resumeId",
          "url",
          "createdAt",
          "ocrGithubUsername",
          "ocrText",
          "reminderTasksIds",
          "resumeBasedQuestions",
          "isInvitedToInterview",
        ],
        include: [
          {
            model: WorkExperience,
            attributes: [
              "workExperienceId",
              "company",
              "startDate",
              "endDate",
              "role",
              "description",
              "locationCity",
              "locationCountry",
            ],
            as: "workExperiences",
          },
          {
            model: Education,
            as: "educations",
            attributes: [
              "educationId",
              "degree",
              "major",
              "school",
              "startDate",
              "endDate",
              "grade",
            ],
          },
          {
            model: PersonalInformation,
            attributes: ["location"],
            as: "personalInformation", // Match the alias used in the association
          },
        ],
      },
    ],
  })
    .then((user) => candidatesDetailsItemToObjMapper(user))
    .catch((err) => {
      console.error("Error fetching users", err);
    });
};

module.exports = { getCandidates, getCandidateById };
