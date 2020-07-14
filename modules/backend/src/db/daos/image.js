const Sequelize = require('sequelize');
const models = require('../models');

async function getAllImages() {
    return models.image.findAll({
        order: [
            ['id', 'DESC']
        ]
    });
}

async function getImageById(id) {
    return models.image.findByPk(id,{
        include: ["annotations"],
        order: [
            ['id', 'DESC']
        ]
    });
}

async function addImage(payload) {
    return models.image.create(payload);
}

module.exports = {
    getAllImages,
    getImageById,
    addImage
};
