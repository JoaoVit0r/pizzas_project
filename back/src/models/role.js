const { DataTypes } = require("sequelize");

const RoleModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = { RoleModel, RoleTableName: "roles" };
