import { useState } from 'react'
import Search from "./Search/Search.jsx";
import SongCard from "./SongCards/SongCards.jsx";
import "./Home.css"

const Home = () => {

  const [songsData, setSongsData] = useState();

  return( 
    <section className="home">
      <Search setSongsData={setSongsData} />
      <SongCard songsData={songsData}/>
    </section>
  );
};

export default Home;

