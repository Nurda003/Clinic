require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const multer = require('multer');
const path = require('path');

const app = express();

// create storage engine
const storage = new GridFsStorage({
  url: process.env.MONGODB_URL,
  file: (req, file) => {
    return {
      filename: `${Date.now()}${path.extname(file.originalname)}`
    };
  }
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // should be the address of your client-side application
    credentials: true,
}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the server' });
});

// Multer Middleware for file upload
app.post('/api/clinics', upload.single('image'), function (req, res) {
    console.log(req.file);
    res.json({ file: req.file });
});

// Route for serving images
app.get('/api/images/:filename', (req, res) => {
  const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });
  gfs.openDownloadStreamByName(req.params.filename).pipe(res);
});

app.use('/api', require('./routes/authRouter'));

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
        console.log('Server is running on port', port);
    });
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
});