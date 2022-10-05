const { Sequelize } = require("sequelize");

const {
  RefreshTokenTableName,
  RefreshTokenModel,
} = require("../models/refreshToken");
const { RoleTableName, RoleModel } = require("../models/role");
const { UserTableName, UserModel } = require("../models/user");

const connectionString = process.env.CONNECTION_STRING;

const db = new Sequelize(connectionString);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const RefreshToken = sequelize.define(RefreshTokenTableName, RefreshTokenModel);
const Role = sequelize.define(RoleTableName, RoleModel);
const User = sequelize.define(UserTableName, UserModel);

Role.belongsToMany(User, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

User.belongsToMany(Role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

RefreshToken.belongsTo(User, {
  foreignKey: "userId",
  targetKey: "id",
});
User.hasOne(RefreshToken, {
  foreignKey: "userId",
  targetKey: "id",
});

db.ROLES = ["user", "admin"];

module.exports({ db });
