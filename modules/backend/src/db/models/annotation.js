'use strict';
module.exports = (sequelize, DataTypes) => {
  const annotation = sequelize.define('annotation', {
    value: DataTypes.STRING,
    uuid: DataTypes.STRING
  }, {});

  annotation.associate = function (models) {
    annotation.belongsTo(models.image, {
      foreignKey: "imageId",
      as: "image",
    });
  };

  return annotation;
};