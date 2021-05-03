const path = require('path');
const fs = require('fs');
const multer = require('multer');
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dzoevd8ts', 
    api_key: '349891482144569', 
    api_secret: '0CJxHOdu3HZ8tQYq10deLYdrjvc' 
  });

const ACCEPTED_FILE_EXTENSIONS = ['image/png', 'image/jpg', 'image/jpeg'];

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: (req, file, cb) => {
        const directory = path.join(__dirname, '../public/uploads');
        cb(null, directory);
    }
});

const fileFilter = (req, file, cb) => {
    if (ACCEPTED_FILE_EXTENSIONS.includes(file.mimetype)){
        cb(null, true)
    } else {
        const error = new Error('Invalid file type')
        error.status = 400;
        cb(error)
    }
};

const upload = multer({
    storage,
    fileFilter
});

const uploadToCloudinary = async (req, res, next) => {
    try {
        // console.log(req)
        if (req.file) {
            const filePath = req.file.path;
            const imageFromCloudinary = await cloudinary.uploader.upload(filePath);
    
            req.image_url = imageFromCloudinary.secure_url;
    
            await fs.unlinkSync(filePath);
    
            return next()
        } else {
            return next()
        }

    } catch (error) {
        return next(error)
    }
};

module.exports = {upload, uploadToCloudinary}