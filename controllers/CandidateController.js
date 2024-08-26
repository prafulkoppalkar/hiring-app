const CandidateService = require("../services/CandidateService");

const getCandidates = async (req, res) => {
  const { limit = 6, offset = 0 } = req.query;
  const candidates = await CandidateService.getCandidates(
    parseInt(limit),
    parseInt(offset)
  );
  res.json(candidates);
};

const getCandidateById = async (req, res) => {
  const { id } = req.params;
  const candidate = await CandidateService.getCandidateById(id);
  if (candidate) {
    res.json(candidate);
  } else {
    res.status(404).send("Candidate not found");
  }
};

module.exports = { getCandidates, getCandidateById };
