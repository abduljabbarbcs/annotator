import { Router } from 'express';
import * as image from '../handler/images'
import * as annotation from '../handler/annotations'
import path from "path";
import multer from 'multer';
const upload = multer({ dest: path.join(__dirname,'../../', 'public','images')});
/**
 * Router
 */
export const router = Router();

router.get('/image', image.list);
router.get('/image/:imageId', image.one);
router.post('/image', upload.single('file'), image.upload);

router.post('/annotation', annotation.create);
router.delete('/annotation/:annotationId', annotation.remove);