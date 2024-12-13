import { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const MusicItem = (props) => {
    
    // Initialised to current favorite state of music item
    const [isDisabled, setDisabled] = useState(props.mymusic.favorite)
    const [favorite, setFavorite] = useState(props.mymusic.favorite) 

    useEffect(() => {
        console.log("Music Item: ", props.mymusic);
    }, [props.mymusic])


    // A small bit of text that appears when you hover over the favourite icon
    const renderTooltip = (props) => {
       return (
            <Tooltip id = "button-tooltip" {...props}>
                Toggle Favorite
            </Tooltip>
       )
    }

    const toggleFavorite = () => {
        const favoriteChanged = !favorite
        setFavorite(favoriteChanged)
        setDisabled(favoriteChanged) // Delete button disabled if favorite

        // Save the state of the favorite button to the music item
        axios.put(`http://localhost:4000/api/music/${props.mymusic._id}`, {
            ...props.mymusic,
            favorite: favoriteChanged,
        })
        .then(() => {
            console.log("Album favorited")
        })
        .catch((error) => {
            console.log((error))
        })
    }

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

            {/* Overlay the Tooltip text over the 'favorite' checkbox */}
            <OverlayTrigger placement="top" delay={{ show: 100, hide: 50}} overlay={ renderTooltip }>
                <Checkbox style={{color: "#fc425b", position: "absolute", left: 5, top: 3, }} size="large" icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={favorite} onChange={toggleFavorite}></Checkbox>
            </OverlayTrigger>       
            
            <img src={props.mymusic.cover} alt={props.mymusic.title} style={{borderRadius: 5, width: 250, height: 250}}></img>

            <Card.Title style={{ marginLeft: 5, marginTop: 5}}>{props.mymusic.title}</Card.Title>
            <Card.Subtitle style={{ marginLeft: 5}}>
                {props.mymusic.artist} 
                <br/>
                {props.mymusic.year}
            </Card.Subtitle>
            
            <div class="btn-group">
                <Link className="btn" to={"/editMusic/" + props.mymusic._id} style={{margin:10, padding: 5, color: 'white', borderColor: 'black', borderRadius: 5, backgroundColor:'#2f353b'}}>Edit</Link>
                <Button className="btn btn-danger" style={{margin: 10, padding: 5, borderRadius: 5}} disabled={isDisabled} onClick={handleDelete}>Delete</Button>
            </div>
        </Card>
    )
}

export default MusicItem;