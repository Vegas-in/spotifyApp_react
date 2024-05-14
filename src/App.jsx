import { useState } from 'react';
import { SongDataContext } from './context/SongDataContext';
import { SongsSideContext } from './context/SongsSideContext';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from "./components/Footer";
import "./styles/styles.scss";

function App() {

  const [songsData, setSongsData] = useState([]);
  const [songsDataSide, setSongsDataSide] = useState([]);

  return (
    <>
      <SongsSideContext.Provider value={ {songsDataSide, setSongsDataSide} }>
      <SongDataContext.Provider value={ {songsData, setSongsData} }>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </SongDataContext.Provider>
      </SongsSideContext.Provider>
    </>
  )
}

export default App