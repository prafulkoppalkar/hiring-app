require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const setupAssociations = require("./config/associations");
const CandidateRoutes = require("./routes/CandidateRoutes");
const SkillRoutes = require("./routes/SkillRoutes");
const SearchRoutes = require("./routes/SearchRoutes");

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "https://my-hiring-app.netlify.app",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());
app.use("/api", CandidateRoutes);
app.use("/api", SkillRoutes);
app.use("/api", SearchRoutes);

// Setup associations
setupAssociations();

// Sync the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
