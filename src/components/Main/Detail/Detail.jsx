import { useState, useEffect, useContext } from 'react';
import { SongDataContext } from '../../../context/SongDataContext';
import { useParams } from "react-router-dom";

const Detail = () => {
  
  const [songDetail, setSongDetail] = useState({});
  const [albumDetail, setAlbumDetail] = useState({});
  const songsData = useContext(SongDataContext);
  const { id } = useParams(); // Accede al parámetro 'id' de useParams()

  // Función para convertir milisegundos a formato minutos:segundos
  function formatDuration(totalMilliseconds) {
    const totalSeconds = totalMilliseconds / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return formattedDuration;
  }

  // Función para obtener el detalle del álbum
  const fetchAlbumDetail = async (albumId) => {
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${albumId}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setAlbumDetail(data); // Establecer el detalle del álbum en el estado
      console.log(albumDetail);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const song = songsData.songsData.find(song => song.data.id === id);
    if (song) {
      setSongDetail(song);
      // Obtener el detalle del álbum si hay datos de álbum en la canción
      if (song.data.albumOfTrack) {
        const albumId = song.data.albumOfTrack.id;
        // Ejecutar la función fetchAlbumDetail cuando el ID del álbum cambie
        fetchAlbumDetail(albumId);
      }
      
    }
  }, [id, songsData.songsData]);


  return (
    <section className='contDetails'>
      {Object.keys(songDetail).length > 0 && (
        <article className='detailContainer'>
          <img src={songDetail.data.albumOfTrack.coverArt.sources[0].url} alt={songDetail.data.name} className='coverImage' />
          <h3 className='songTitle'>{songDetail.data.name}</h3>
          <p className='songDuration'>Duración: {formatDuration(songDetail.data.duration.totalMilliseconds)}</p>
          {Object.keys(albumDetail).length > 0 && (
            <div className='albumDetails'>
              <h4>DETALLES DEL ÁLBUM</h4>
              <p className='miniDetails'>Nombre: {albumDetail.albums[0].name}</p>
              <p className='miniDetails'>Artista: {albumDetail.albums[0].artists[0].name}</p>
              <p className='miniDetails'>Fecha de lanzamiento: {albumDetail.albums[0].release_date}</p>
              <p className='miniDetails'>Total de pistas: {albumDetail.albums[0].total_tracks}</p>
              <div className='trackList'>
                <h4>LISTA DE PISTAS</h4>
                <ul className='ulAlbum'>
                  {albumDetail.albums[0].tracks.items.map((track, index) => (
                    <li key={index} className='trackItem'>
                      <p>{index + 1}. {track.name}</p>
                      <p className='miniDetails'>Duración: {formatDuration(track.duration_ms)}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </article>
      )}
      {Object.keys(songDetail).length === 0 && <p>No se encontraron detalles de la canción</p>}
    </section>
  );
};

export default Detail;