const { DataTypes } = require("sequelize");

const UserModel = {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
};

module.exports = { UserModel, UserTableName: "users" };