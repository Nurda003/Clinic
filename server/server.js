require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const multer = require('multer');
const path = require('path');
const Clinic = require('../server/models/clinicsModel');
const { MongoClient } = require("mongodb");
const { GridFSBucket } = require("mongodb");
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
app.post('/api/clinics', upload.single('image'), (req, res) => {
  let newClinic = new Clinic({
      name: req.body.name, // Add your field names
      address: req.body.address,
      image: { // store file data
          id: req.file.id,
          contentType: req.file.contentType,
          filename: req.file.filename
      }
  });

  newClinic.save()
      .then(clinic => res.json(clinic))
      .catch(err => res.status(400).json('Error:' + err));
});

// Route for serving images
app.get('/api/image/:filename', async (req, res) => {

    const { filename } = req.params;

    const client = new MongoClient(process.env.MONGODB_URL);

    try {
        await client.connect();
        const db = client.db("test"); 
        const bucket = new GridFSBucket(db, {
            bucketName: "fs" 
        });

        const image = await bucket.openDownloadStreamByName(filename);

        res.setHeader('Content-Type', 'image/jpeg'); 
        image.pipe(res);
    } catch (err) {
        console.error(err);
        res.status(404).send('Image not found');
    }
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