import {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import {getAllImages, getImageById, addImage} from '../db/daos/image'
import path from "path";
import { v4 as uuid } from 'uuid';
import fs from 'fs';

const list  = async(req, res) => {
    try {
        const images = await getAllImages();
        res.status(OK).json({images:images});
    } catch (err) {
        res.send({ status: INTERNAL_SERVER_ERROR, message: err })
    }
};

const one  = async(req, res) => {
    try {
        const { imageId } = req.params;
        const image = await getImageById(imageId);
        res.status(OK).json({image:image});
    } catch (err) {
        res.send({ status: INTERNAL_SERVER_ERROR, message: err })
    }
};

const upload = async (req, res) => {
    const imagePath = `${uuid()}.${req.file.mimetype.split('/')[0]}`;
    var file = path.join(__dirname,'../../', 'public', 'images', imagePath);
    fs.rename(req.file.path, file, async (err) => {
        if (err) {
            res.send(500);
        } else {
            await addImage({path:imagePath});
            res.json({
                message: 'Image uploaded successfully',
            });
        }
    });
};

export {
    one,
    upload,
    list
}