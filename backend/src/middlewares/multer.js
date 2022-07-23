const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', 'uploads'));
  }
  , filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});


const upload = multer({
  storage,
  // limits: {fileSize: 1000000},
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(pdf|doc|docx|odt|txt)$/)) {
      return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  }
}).single('file');

module.exports = upload;

