import {INTERNAL_SERVER_ERROR, OK} from "http-status-codes";
import {createAnnotation, removeAnnotation} from '../db/daos/annotation'

export const create  = async(req, res) => {
    try {
        const { value, uuid, imageId } = req.body;
       const annotation = await createAnnotation({value,uuid,imageId});
        res.status(OK).json({annotation:annotation});
    } catch (err) {
        res.send({ status: INTERNAL_SERVER_ERROR, message: err })
    }
};
export const remove  = async(req, res) => {
    try {
        const { annotationId } = req.params;
        await removeAnnotation(annotationId);
        res.status(OK).json({message:"Success"});
    } catch (err) {
        res.send({ status: INTERNAL_SERVER_ERROR, message: err })
    }
};