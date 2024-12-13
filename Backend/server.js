const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(cors()) // Cross-Origin Resource Sharing - Allows communication between client and server

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Body Parser is used to handle POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.c6bvt.mongodb.net/DB2024');

// Create a data model for music data
const musicSchema = new mongoose.Schema({
    title:String,
    year:String,
    artist:String,
    cover:String,
    favorite:{type: Boolean, default: false}
});

const musicModel = new mongoose.model('mymusic', musicSchema);

// Aquire the data from Mongo
app.get('/api/music', async(req, res) => {
    const music = await musicModel.find({});
    res.status(200).json({music})
})

// Creation of new album
app.post('/api/music', async (req, res)=>{
    console.log(req.body.title);

    const {title, year, artist, cover} = req.body;
    const newMusic = new musicModel({title, year, artist, cover})
    await newMusic.save();

    res.status(201).json({message: 'Album created', music:newMusic});
})

// Retrieve object details by ID for editing
app.get('/api/music/:id', async (req, res) => {
    let music = await musicModel.findById({ _id: req.params.id });
    res.send(music);
});

// Update object with edited details
app.put('/api/music/:id', async (req, res) => {
    let music = await musicModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(music);
});

// Handle delete requests
app.delete('/api/music/:id', async (req, res) => {
    console.log('Deleting album with ID: ' + req.params.id);
    const music = await musicModel.findByIdAndDelete(req.params.id)
    res.status(200).send({ message: "Album has been removed from database", music})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

