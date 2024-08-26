const express = require("express");
const {
  getCandidates,
  getCandidateById,
} = require("../controllers/CandidateController");

const router = express.Router();

router.get("/candidates", getCandidates);
router.get("/candidates/:id", getCandidateById);

module.exports = router;
