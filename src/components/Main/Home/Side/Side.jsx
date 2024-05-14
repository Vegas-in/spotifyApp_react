import { useContext } from 'react';
import { SongsSideContext } from '../../../../context/SongsSideContext';

const Side = () => {

  const songsDataSide = useContext(SongsSideContext)

  return (
    <section className='contSideCards'>
        {songsDataSide.songsDataSide.map((song, i) => (
          <article key={i} className="sideCards">
            <a href={`https://open.spotify.com/track/${song.data.id}`} target="_blank" rel="noopener noreferrer">
              <img src={song.data.albumOfTrack.coverArt.sources[0].url}  className='imgSide'/>
            </a>
            {/* <p className='titleArtistSide'>{song.data.name}</p>
            <p className='titleArtistSide'>{song.data.artists.items[0].profile.name}</p> */}
          </article>
        ))} 
    </section>
  )
};

export default Side;
