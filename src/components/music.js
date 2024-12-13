import MusicItem from './musicitem';

const Music = (props) => {
    return (
        <div className="card-container">
            {/* Iterates through the data array and each object is passed to MusicItem as properties  */}
            {props.mymusic.map((music) => (
              <MusicItem mymusic={music} key={music._id} Reload = {props.ReloadData}/>
            ))}
        </div>
  )
}

export default Music;