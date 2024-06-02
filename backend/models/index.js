const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const User = require("./User");
const Issue = require("./Issue");
const Article = require("./Article");

// Modelleri başlatın
User.init(sequelize);
Issue.init(sequelize);
Article.init(sequelize);

// Modeller arasındaki ilişkileri tanımlayın
Issue.hasMany(Article, { foreignKey: "SayiID", onDelete: "CASCADE" });
Article.belongsTo(Issue, { foreignKey: "SayiID" });

module.exports = {
  sequelize,
  User,
  Issue,
  Article,
};
