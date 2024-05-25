const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    originalName: String,
    fileName: String,
    mimeType: String,
    size: Number,
    uploadDate: {type: Date, defaul: Date.now}
});

module.exports = mongoose.model('Image', imageSchema);