import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Allows the return of a function that enables navigation to different routes programmatically 

const Create = () => {

    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [artist, setArtist] = useState('')
    const [cover, setCover] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const music = {title, year, artist, cover}; // Set object properties once submit button clicked
        console.log(music)

        axios.post('http://localhost:4000/api/music', music) // Send new object to API
            .then((res) => {
                console.log(res.data)
                navigate('/view') // Automatically navigate to view page once finished
            })
            .catch()

    }
    return(
        <div>
            <br />
            <form onSubmit={handleSubmit} className="card m-4 mx-auto login-styling bg-secondary" style={{width: 400, padding: 25}}>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Add Album Title: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={title} onChange = {(e) => {setTitle(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Add Album Year: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={year} onChange = {(e) => {setYear(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Add Artist: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={artist} onChange = {(e) => {setArtist(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label style={{marginTop: 10}}>Add Album Cover: </label>
                    <input type="text" className="form-control" style={{backgroundColor: '#7F7F7F', color: 'white', borderColor: '#7F7F7F'}} value={cover} onChange = {(e) => {setCover(e.target.value)}} />
                </div>

                <div style={{textAlign: 'center'}}>
                    <input type="submit" value="Add Album" style={{padding: 5, marginTop: 20, backgroundColor:'#2f353b', color: 'white'}} ></input>
                </div>
            </form>
        </div>
    );
}

export default Create;