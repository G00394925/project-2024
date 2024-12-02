import MusicItem from './musicitem';

const Music = (props) => {
    return (
        // Each music item has its own container with the card-container class - Allows the cards to be displayed side by side
        <div className="card-container"> 
            {props.mymusic.map((music) => (
              <MusicItem mymusic={music} key={music._id} />
            ))}
        </div>
  )
}

export default Music;