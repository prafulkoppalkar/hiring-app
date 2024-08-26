const Skill = require("../models/Skills");

const { candidatesItemToObjMapper } = require("../itemToObjMapper");

const getAllSkills = async () => {
  return await Skill.findAll();
};

module.exports = {
  getAllSkills,
};
