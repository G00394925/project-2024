import {useEffect , useState} from "react";
import Music from './music';
import axios from "axios";

const View = () => {

    const [music, setMusic] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/music') // Retrieve music from api
            .then((response) => {
                console.log(response.data)
                setMusic(response.data.music); // Set object to data retrieved from api
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);
    return(
        <div style={{marginLeft: 15}}>
            <br/>
            <Music mymusic={music} />
        </div>
    );
}

export default View;