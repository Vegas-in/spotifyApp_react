import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail/Detail.jsx";
import Form from "./Form/Form.jsx";


const Main = () => {

  


  return (
    <main className="main">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      
    </main>);
};

export default Main;

