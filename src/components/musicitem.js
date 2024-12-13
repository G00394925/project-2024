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
    
    const [isDisabled, setDisabled] = useState(props.mymusic.favorite) // To disable the delete button when an item is favourited
    const [favorite, setFavorite] = useState(props.mymusic.favorite) // Initialised to current favorite status of music item

    useEffect(() => {
        console.log("Music Item: ", props.mymusic);
    }, [props.mymusic])


    // A small bit of text that appears as you hover over the favourite icon
    const renderTooltip = (props) => {
       return (
            <Tooltip id = "button-tooltip" {...props}>
                Favourite this album
            </Tooltip>
       )
    }

    const toggleFavorite = () => {
        const favoriteChanged = !favorite
        setFavorite(favoriteChanged)
        setDisabled(favoriteChanged) // Delete button disabled if favorite


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
            
            <OverlayTrigger placement="top" delay={{ show: 250, hide: 400}} overlay={ renderTooltip }>
                <Checkbox style={{color: "#fc425b", position: "absolute", left: 5, top: 3, }} size="large" icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={favorite} onChange={toggleFavorite}></Checkbox>
            </OverlayTrigger>       
            
            <img src={props.mymusic.cover} alt={props.mymusic.title} style={{borderRadius: 5}}></img>

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