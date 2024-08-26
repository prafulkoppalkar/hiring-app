const express = require("express");
const {
  getCandidatesBySkillAndName,
} = require("../controllers/SearchController");

const router = express.Router();

router.get("/search", getCandidatesBySkillAndName);

module.exports = router;
