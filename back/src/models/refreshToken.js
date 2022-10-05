const { DataTypes } = require("sequelize");

const RefreshTokenModel = {
  token: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  expiryDate: {
    type: DataTypes.DATE,
  },
};

module.exports = { RefreshTokenModel, RefreshTokenTableName: "refresh_tokens" };
