const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const { sequelize } = require("./models");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Bu satırı ekleyin
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// React build dosyalarını sunmak için bu satırları ekleyin
app.use(express.static(path.join(__dirname, "frontend", "build")));

// Route'ları ekleyin
app.use("/api/users", require("./routes/users"));
app.use("/api/issues", require("./routes/issues"));
app.use("/api/articles", require("./routes/articles"));

// React uygulaması için fallback route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
