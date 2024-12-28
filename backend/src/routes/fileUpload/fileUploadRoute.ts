import express, { Request, Response} from 'express';
import multer from 'multer';

import uploadErrorHandler from '../../middleware/uploadErrorHandler';
import fileMetadataLoggerMiddleware from '../../middleware/fileMetadataLoggerMiddleware';
import fileValidationMiddleware from '../../middleware/fileValidationMiddleware';

const router=express.Router();
const upload=multer({dest:'uploads/'});

router.post(
    '/upload',
    upload.single('file'),

    fileValidationMiddleware,
    fileMetadataLoggerMiddleware,
    uploadErrorHandler,

    (req:Request, res:Response) => {
        res.status(200).json({message:'CSV File uploaded successfully', file:req.file});
    }
);

export default router;