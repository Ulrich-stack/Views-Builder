const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');
const Image = require('../models/image')

//Configuration de multer pour le stockage des fichiers dans
//le répertoire local
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/uploads');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage});

//pour enregistrer une image
router.post('/upload', upload.single('image', (req, res) =>{
    const {originalname, filename, mimetype, size} = req.file;
    const newImage = new Image({
        originalName: originalname,
        filename: filename,
        mimetype: mimetype,
        size: size,
        uploadDate: new Date()
    });

    newImage.save()
        .then(()=> res.status(201).json({message: 'Image uploaded successfully', file: req.file}))
        .catch((error) => res.status(500).json({error: 'Error uploading image', details: error}));
    }))

    //pour récupérer toutes les images
router.get('/', (req, res) =>{
    Image.find()
        .then(images => res.json(images))
        .catch(error => res.status(500).json({error: 'Error fetching images', details}));

})

//pour récupérer une image spécifique
router.get('/filename', (req, res) =>{
    const {filename} = req.params;
    const filePath = path.join(__dirname, '..', 'public', 'uploads', filename);

    res.sendFile(filePath, (err) =>{
        if(err){
            re.status(404).json({error: 'Image not found'});
        }
    })
})

module.exports = router;