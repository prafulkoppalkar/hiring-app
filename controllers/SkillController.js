const SkillsService = require("../services/SkillService");

const getAllSkills = async (req, res) => {
  try {
    const skills = await SkillsService.getAllSkills();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllSkills };
