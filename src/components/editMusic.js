import React from 'react';
import { useParams } from 'react-router-dom'; // Allows for the access of the dynamic parameters on the current route
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";  

export default function EditMusic(props) {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");
  const [cover, setCover] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/music/' + id) // Get data by ID
        .then((response) => {
            // Set current values
            setTitle(response.data.title) 
            setYear(response.data.year)
            setArtist(response.data.artist)
            setCover(response.data.cover)
        })
        .catch((error) => {
            console.log(error)
        })
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMusic = {id, title, year, artist, cover} // Set new values
    axios.put('http://localhost:4000/api/music/' + id, newMusic) // Send new values to APi
        .then((res) => {
            console.log(res.data)
            navigate('/view') // Return to view page once finished
        })
  }

  return (
    <div>
        <br />
            <form onSubmit={handleSubmit} className="card m-4 mx-auto login-styling bg-secondary" style={{width: 400, padding: 25}}>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Edit Album Title: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={title} onChange = {(e) => {setTitle(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Edit Album Year: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={year} onChange = {(e) => {setYear(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Edit Artist: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={artist} onChange = {(e) => {setArtist(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Edit Album Cover: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={cover} onChange = {(e) => {setCover(e.target.value)}} />
                </div>

                <div style={{textAlign: 'center'}}>
                    <input type="submit" value="Confirm Changes" style={{padding: 5, marginTop: 20, backgroundColor:'#2f353b', color: 'white'}} ></input>
                </div>
            </form>
        </div>
    );
}