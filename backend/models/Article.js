const { Model, DataTypes } = require("sequelize");

class Article extends Model {
  static init(sequelize) {
    return super.init(
      {
        MakaleID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Baslik: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        SayiID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        Yazar: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Ozet: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        AnahtarKelime: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        MakalePDF: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Article",
        tableName: "Articles", // Veritabanı tablosu adı
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Issue, { foreignKey: "SayiID", onDelete: "CASCADE" });
  }
}

module.exports = Article;
