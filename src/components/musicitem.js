import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

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
            <div class="btn-group">
                <Link className="btn" to={"/editMusic/" + props.mymusic._id} style={{margin:10, padding: 5, color: 'white', borderColor: 'black', backgroundColor:'#2f353b'}}>Edit</Link>
                <Button className="btn btn-danger" style={{margin: 10, padding: 5}}>Delete</Button>
            </div>
        </Card>
    )
}

export default MusicItem;