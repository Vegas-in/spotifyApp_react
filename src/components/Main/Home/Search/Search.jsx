import { useState } from 'react';
import "./Search.css";

const Search = ({ setSongsData }) => {

  const [search, setSearch] = useState("");
  

  function handleSearch(e){
    if(!search){
      e.preventDefault();
      alert('You have to type something :)');
    }else{
      e.preventDefault();
      searchSpotify(search);
      e.target.song.value = "";
    }
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY, //importar API-Key del .env
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  async function searchSpotify(search){
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=25&numberOfTopResults=5`
      let res = await fetch(url, options);
      let data = await res.json();

      setSongsData(data.tracks.items);
      
    } catch (error) {
      console.log(`You have the error: ${e}`);
    }
  }



  
  return (
    <section className="Search">
     <h3>¿Que te apetece escuchar?</h3>
     <form onSubmit={handleSearch}>
      <input type="text" name="song" placeholder="Sympathy For The Devil..."  onChange={e => setSearch(e.target.value)} />
      <button>Search</button>
     </form>
    </section>
    
  )
};

export default Search;

