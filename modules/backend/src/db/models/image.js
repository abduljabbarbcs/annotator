'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    path: DataTypes.STRING
  }, {});

  image.associate = function (models) {
    image.hasMany(models.annotation, { as: "annotations" })
  };

  return image;
};