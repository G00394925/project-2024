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
    cover:String
});

const musicModel = new mongoose.model('mymusic', musicSchema);

app.get('/api/music', async(req, res) => {
    const music = await musicModel.find({});
    res.status(200).json({music})
})

app.post('/api/music', async (req, res)=>{
    console.log(req.body.title);

    const {title, year, artist, cover} = req.body;
    const newMusic = new musicModel({title, year, artist, cover})
    await newMusic.save();

    res.status(201).json({message: 'Album created', Music:newMusic});
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

