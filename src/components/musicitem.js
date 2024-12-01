import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MusicItem = (props) => {

    useEffect(() => {
        console.log("Music Item: ", props.mymusic);
    }, [props.mymusic])
 
    return(
        <Card className="bg-secondary" style={{ color: '#c7c7c7', width: '16rem', margin: '10px'}}>
            <img src={props.mymusic.Cover} alt={props.mymusic.Title}></img>
            <Card.Title style={{ marginLeft: '5px'}}>{props.mymusic.Title}</Card.Title>
            <Card.Subtitle style={{ marginLeft: '5px'}}>
                {props.mymusic.Artist} 
                <br/>
                {props.mymusic.Year}
            </Card.Subtitle>
        </Card>
    )
}

export default MusicItem;