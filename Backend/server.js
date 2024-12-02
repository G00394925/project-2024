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

const data = [
    {
        "Title": "Appetite for Destruction",
        "Year": "1987",
        "Artist": "Guns N' Roses",
        "Cover": "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/GunsnRosesAppetiteforDestructionalbumcover.jpg/220px-GunsnRosesAppetiteforDestructionalbumcover.jpg"
    },
    {
        "Title": "Brat",
        "Year": "2024",
        "Artist": "Charli xcx",
        "Cover": "https://th.bing.com/th?id=ODL.948b1fe1bf9a60d358c71e69080a120c&w=200&h=200&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&pid=23.1"
    },
    {
        "Title": "Hit Me Hard and Soft",
        "Year": "2024",
        "Artist": "Billie Eilish",
        "Cover": "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png/220px-Billie_Eilish_-_Hit_Me_Hard_and_Soft.png"
    }, 
]

app.get('/api/music', async (req, res) => {
    // const music = await musicModel.find({});
    res.status(200).json({data});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

