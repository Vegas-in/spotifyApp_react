import React from 'react'
import SongCard from "./SongCards/SongCards.jsx";
import Side from './Side/Side.jsx';
import "./Home.css"

const Home = () => {

  return( 
    <section className="home">
      <Side/>
      <SongCard />
    </section>
  );
};

export default Home;

