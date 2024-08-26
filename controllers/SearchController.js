const CandidateService = require("../services/CandidateService");
const SearchService = require("../services/SearchService");

const getCandidatesBySkillAndName = async (req, res) => {
  const { skillName, searchText, limit = 6, offset = 0 } = req.query;

  try {
    if (!skillName && !searchText) {
      const candidates = await CandidateService.getCandidates(
        parseInt(limit),
        parseInt(offset)
      );
      res.json(candidates);
    } else {
      const candidates = await SearchService.getCandidatesBySkillAndName(
        skillName,
        searchText,
        parseInt(limit),
        parseInt(offset)
      );
      res.json(candidates);
    }
  } catch (error) {
    res.status(500).json({ message: `Internal Server Error ${error}` });
  }
};

module.exports = { getCandidatesBySkillAndName };
