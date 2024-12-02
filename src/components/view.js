import {useEffect , useState} from "react";
import Music from './music';
import axios from "axios";

const View = () => {

    const [music, setMusic] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/music')
            .then((response) => {
                console.log(response.data)
                setMusic(response.data.music);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);
    return(
        <div>
            <h1>This is where the music happens</h1>
            <Music mymusic={music} />
        </div>
    );
}

export default View;