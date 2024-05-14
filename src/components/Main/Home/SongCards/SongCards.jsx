import { useState, useContext } from 'react';
import { SongDataContext } from '../../../../context/SongDataContext';
import { Link } from 'react-router-dom';
import play from "../../../../assets/boton-de-reproduccion.png";

const SongCards = () => {
  const [sortBy, setSortBy] = useState('name'); // Estado para almacenar la opción de ordenamiento
  const [currentPage, setCurrentPage] = useState(1); // Estado para almacenar la página actual
  const songsData = useContext(SongDataContext);
  const songsPerPage = 6; // Número de canciones por página

  // Función para ordenar los datos según la opción seleccionada
  const sortSongs = () => {
    let sortedSongs = [...songsData.songsData]; // Crear una copia de los datos originales

    switch (sortBy) {
      case 'name':
        sortedSongs.sort((a, b) => a.data.name.localeCompare(b.data.name)); // Ordenar por nombre
        break;
      case 'artist':
        sortedSongs.sort((a, b) => a.data.artists.items[0].profile.name.localeCompare(b.data.artists.items[0].profile.name)); // Ordenar por artista
        break;
      case 'album':
        sortedSongs.sort((a, b) => a.data.albumOfTrack.name.localeCompare(b.data.albumOfTrack.name)); // Ordenar por álbum
        break;
      default:
        break;
    }

    return sortedSongs;
  };

  // Calcular índices de las canciones para la paginación
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = sortSongs().slice(indexOfFirstSong, indexOfLastSong);

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <section className='container'>
      {songsData.songsData.length > 0 && (
        <div className='contFilterSelect'>
          <label htmlFor="sortBy" className='labelFilter'>Ordenar por:</label>
          <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='selectFilter'>
            <option value="name">Nombre</option>
            <option value="artist">Artista</option>
            <option value="album">Álbum</option>
          </select>
        </div>
      )}

      {currentSongs.map((song, i) => (
        <article key={i} className="song">
          <Link to={`/detail/${song.data.id}`}>
            <img src={song.data.albumOfTrack.coverArt.sources[0].url} className="imgSong" alt={song.data.name} />
          </Link>
          <div className='contArtistURI'>
            <div>
              <h3 className='titleSong'>{song.data.name}</h3>
              <h4 className='artistName'>{song.data.artists.items[0].profile.name}</h4>
            </div>
            <a href={`https://open.spotify.com/track/${song.data.id}`} className="linkPlay" target="_blank" rel="noopener noreferrer"><img src={play} alt="Play" /></a>
          </div>
        </article>
      ))}

      {songsData.songsData.length === 0 && ( // Mostrar mensaje si no hay datos
        <article className='contStartH2'>
          <h2 className='h2Home'>What do you want to listen to now?</h2>
        </article>
      )}

      {currentSongs.length > 0 && ( // Mostrar botones de paginación solo si hay canciones para mostrar
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1} className='buttonPrev'>Prev</button>
          <button onClick={nextPage} disabled={currentSongs.length < songsPerPage} className='buttonNext'>Next</button>
        </div>
      )}
    </section>
  );
};

export default SongCards;
