import { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: multer.memoryStorage() });

export const config = {
  api: {
    bodyParser: false,
  },
};

let responseSent = false; // define the variable outside of the function

const uploadImageHandler = async (
  req: NextApiRequest & { file: any },
  res: NextApiResponse<any>
) => {
  try {
    await new Promise<void>((resolve, reject) => {
      upload.single('image')(req as any, res as any, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });

    const fileBuffer = req.file.buffer;

    const stream = cloudinary.uploader.upload_stream(
      { folder: 'Blog' },
      (error: any, result: any) => {
        if (responseSent) {
          return;
        }

        if (error) {
          console.error(error);
          res
            .status(500)
            .json({ success: false, message: 'Error uploading image' });
        } else {
          responseSent = true;
          res.status(200).json({
            success: true,
            data: {
              url: result.secure_url,
              publicId: result.public_id,
            },
            message: 'File uploaded successfully',
          });
        }
      }
    );
    stream.end(fileBuffer);
  } catch (err) {
    console.error(err);
    if (!responseSent) {
      res
        .status(500)
        .json({ success: false, message: 'Error uploading image' });
    }
  }
};

export default uploadImageHandler;
