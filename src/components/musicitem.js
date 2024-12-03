import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MusicItem = (props) => {

    useEffect(() => {
        console.log("Music Item: ", props.mymusic);
    }, [props.mymusic])
 
    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete('http://localhost:4000/api/music/' + props.mymusic._id) // Delete object from API
            .then(() => {
                props.Reload(); // Reloads the page after deleting object
            })
            .catch((error) => {
                console.error("Error deleting album: ", error)
            })
    }
    return(
        <Card className="bg-secondary" style={{ color: '#c7c7c7', width: '16rem', margin: 10, padding: 2}}>
            <img src={props.mymusic.cover} alt={props.mymusic.title} style={{borderRadius: 5}}></img>
            <Card.Title style={{ marginLeft: 5, marginTop: 5}}>{props.mymusic.title}</Card.Title>
            <Card.Subtitle style={{ marginLeft: 5}}>
                {props.mymusic.artist} 
                <br/>
                {props.mymusic.year}
            </Card.Subtitle>
            <div class="btn-group">
                <Link className="btn" to={"/editMusic/" + props.mymusic._id} style={{margin:10, padding: 5, color: 'white', borderColor: 'black', borderRadius: 5, backgroundColor:'#2f353b'}}>Edit</Link>
                <Button className="btn btn-danger" style={{margin: 10, padding: 5, borderRadius: 5}} onClick={handleDelete}>Delete</Button>
            </div>
        </Card>
    )
}

export default MusicItem;