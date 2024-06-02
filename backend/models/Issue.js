const { Model, DataTypes } = require("sequelize");

class Issue extends Model {
  static init(sequelize) {
    return super.init(
      {
        SayiID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        SayiAdi: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        CiltNumarasi: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        SayiNumarasi: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        Yil: {
          type: DataTypes.STRING, // String olarak güncellendi
          allowNull: false,
        },
        BasEditorMesaj: {
          type: DataTypes.TEXT,
        },
        EditorMesaj: {
          type: DataTypes.TEXT,
        },
        KapakFotografi: {
          type: DataTypes.STRING,
        },
        FullPdf: {
          type: DataTypes.STRING,
        },
        GuncelMi: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: "Issue",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Article, { foreignKey: "SayiID", onDelete: "CASCADE" });
  }

  get makaleSayisi() {
    return this.Articles ? this.Articles.length : 0;
  }
}

module.exports = Issue;
