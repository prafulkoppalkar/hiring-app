const express = require("express");
const { getAllSkills } = require("../controllers/SkillController");

const router = express.Router();

router.get("/skills", getAllSkills);

module.exports = router;
