const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('Budget', {
    ID_Budget: {
      primaryKey: true,
    },
    budget_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    services: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    discount: {
      type: DataTypes.FLOAT,
      defaultValue: null,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
