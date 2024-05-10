import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SongDataContext } from '../../context/SongDataContext.js';
import Home from "./Home";
import Detail from "./Detail/Detail.jsx";
import Form from "./Form/Form.jsx";


const Main = () => {

  const [songsData, setSongsData] = useState([]);


  return (
    <main className="main">
      <SongDataContext.Provider value={ {songsData, setSongsData} }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/form" element={<Form />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </SongDataContext.Provider>
    </main>);
};

export default Main;

