import MusicItem from './musicitem';

const Music = (props) => {
    return (
        // 'card-container' class uses a flex layout for each object card
        <div className="card-container"> 
            {props.mymusic.map((music) => (
              <MusicItem mymusic={music} key={music._id} Reload = {props.ReloadData}/>
            ))}
        </div>
  )
}

export default Music;