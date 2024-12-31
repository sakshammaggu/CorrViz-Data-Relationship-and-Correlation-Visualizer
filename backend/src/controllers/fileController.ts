import { Request, Response } from "express";
import { storeFileMetadata } from "../services/fileService";

const uploadFile = async (req: Request, res: Response): Promise<void> => {
    try {
        const file = req.file;
        if (!file) { 
            res.status(400).json({ message: 'No file uploaded' }); 
            return;
        }
        const savedMetadata = await storeFileMetadata(file);
        res.status(200).json({ 
            message: 'File metadata saved successfully', 
            metadata: savedMetadata 
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: 'Error uploading file', error: error.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};

export { uploadFile };