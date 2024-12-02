import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MusicItem = (props) => {

    useEffect(() => {
        console.log("Music Item: ", props.mymusic);
    }, [props.mymusic])
 
    return(
        <Card className="bg-secondary" style={{ color: '#c7c7c7', width: '16rem', margin: '10px'}}>
            <img src={props.mymusic.cover} alt={props.mymusic.title}></img>
            <Card.Title style={{ marginLeft: '5px'}}>{props.mymusic.title}</Card.Title>
            <Card.Subtitle style={{ marginLeft: '5px'}}>
                {props.mymusic.artist} 
                <br/>
                {props.mymusic.year}
            </Card.Subtitle>
        </Card>
    )
}

export default MusicItem;