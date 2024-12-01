import MusicItem from './musicitem';

function Music(props) {
    return props.mymusic.map((music) => (
      <MusicItem mymusic={music} key={null} />
    ));
  }

export default Music;