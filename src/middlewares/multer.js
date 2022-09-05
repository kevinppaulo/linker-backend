const multer = require('multer');
const path = require('path');

module.exports = multer({
  dest: path.resolve(__dirname, '..', 'tmp'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'tmp'));
    },
    filename: (req, file, cb) => {
      const { userID } = req.params;
      cb(null, userID + '-' + file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    const extensionImg = ['image/png', 'image/jpeg', 'image/jpg'].find(
      (formatAccepted) => formatAccepted == file.mimetype
    );

    if (extensionImg) {
      return cb(null, 'Accepted format image');
    } else {
      return cb(null, 'Format imagem error');
    }
  }
});
