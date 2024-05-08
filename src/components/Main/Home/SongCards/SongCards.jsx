import React from 'react'
import './SongCards.css';

const SongCards = ({songsData}) => {

  
    return (
    <section className='container'>
      { songsData ? songsData.map((song,i) => (
        
        <article key={i} className="song">
            <img src={song.data.albumOfTrack.coverArt.sources[0].url} className="imgSong"/>
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