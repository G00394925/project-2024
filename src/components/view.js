import {useEffect , useState} from "react";
import Music from './music';

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

const View = () => {
    return(
        <div>
            <h1>This is where the music happens</h1>
            <Music mymusic={data} />
        </div>
    );
}

export default View;