const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        KullaniciID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        KullaniciAdi: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Sifre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        Email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        Rol: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "user",
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "Users",
        timestamps: true,
      }
    );
  }
}

module.exports = User;
