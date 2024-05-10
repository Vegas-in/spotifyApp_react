import { useContext } from 'react';
import { SongDataContext } from '../../../../context/SongDataContext';
import { Link } from 'react-router-dom';
import './SongCards.css';

const SongCards = () => {

    const songsData = useContext(SongDataContext)
    console.log(songsData);
    return (
    <section className='container'>
      { songsData ? songsData.songsData.map((song,i) => (
        
        <article key={i} className="song">
            <Link to='/detail'>
             <img src={song.data.albumOfTrack.coverArt.sources[0].url} className="imgSong"/>
            </Link>
            <div className='contArtistURI'>
              <div>
                <h3 className='titleSong'>{song.data.name}</h3>
                <h4 className='artistName'>{song.data.artists.items[0].profile.name}</h4>
              </div>
              <a href={`https://open.spotify.com/track/${song.data.id}`} className="linkPlay" target="_blank" rel="noopener noreferrer"></a>
            </div>      
        </article> 
      )) : null }
      
    </section>
  )
};

export default SongCards;