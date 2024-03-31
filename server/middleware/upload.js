const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: 'mongodb+srv://tim:tima123123@cluster1.p11gunc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        const match = ['image/png', 'image/jpeg'];
      
        if (match.indexOf(file.mimetype) === -1) {
            return new Error('Invalid file type, only JPEG and PNG is allowed!');
        }
        
        return {
            bucketName: 'photos',
            filename: `${Date.now()}-any-name-${file.originalname}`,
        };
    }

  });

  module.exports = multer({ storage });