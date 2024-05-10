import React from 'react'
import Search from "./Search/Search.jsx";
import SongCard from "./SongCards/SongCards.jsx";
import "./Home.css"

const Home = () => {

  return( 
    <section className="home">
      <Search />
      <SongCard />
    </section>
  );
};

export default Home;

