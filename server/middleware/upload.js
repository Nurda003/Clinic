const multer  = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const mongoose = require('mongoose');
const path = require('path');

const storage = new GridFsStorage({
  url: 'mongodb+srv://tim:tima123123@cluster1.p11gunc.mongodb.net/?retryWrites=true&w=majority',  //  db url
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        return cb(err);
      }
      const filename = buf.toString('hex') + path.extname(file.originalname);
      cb(null, filename);
    });
  },
  metafunction(req, file, cb) {
    cb(null, { _id: new mongoose.Types.ObjectId() });
  },
  bucketName: 'test'
});

const upload = multer({ storage }); 

module.exports = upload;