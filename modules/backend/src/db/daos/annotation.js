const Sequelize = require('sequelize');
const models = require('../models');

async function removeAnnotation(id) {
    return models.annotation.destroy({
        where: {
            id: id
        }
    });
}
async function createAnnotation(payload) {
    return models.annotation.create(payload);
}

module.exports = {
    removeAnnotation,
    createAnnotation
};
