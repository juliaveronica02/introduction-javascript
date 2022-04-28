'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mapel = sequelize.define('Mapel', {
    nama: DataTypes.STRING
  }, {});
  Mapel.associate = function(models) {
    // associations can be defined here
  };
  return Mapel;
};