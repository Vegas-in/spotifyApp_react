import { useState, useEffect, useRef,  useContext } from 'react';
import { SongDataContext } from '../../../../context/SongDataContext';
import "./Search.css";

const Search = () => {

  const [search, setSearch] = useState("");
  const {songsData,setSongsData} = useContext(SongDataContext);
  const inputRef = useRef();
  

  function handleSearch(){
      setSearch(inputRef.current.value)
      console.log(inputRef.current.value)
    }
  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY, //importar API-Key del .env
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  
    useEffect(()=>{
      if (search) {
      async function searchSpotify(){
        try {
          console.log(search);
          let url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=25&numberOfTopResults=5`
          let res = await fetch(url, options);
          let data = await res.json();
          
          setSongsData(data.tracks.items);
          //console.log(songsData);
          //inputRef.current.value = "";
        } catch (error) {
          console.log("Error");
        }
        
      }

      searchSpotify();

      }else null

     
    
    },[search]);
  
  
 

  
  return (
    <section className="Search">
     <h3>¿Que te apetece escuchar?</h3>
     <article >
      <input type="text" name="song" placeholder="Sympathy For The Devil..."  ref={inputRef}/>
      <button onClick={handleSearch}>Search</button>
     </article>
    </section>
    
  )
};

export default Search;

