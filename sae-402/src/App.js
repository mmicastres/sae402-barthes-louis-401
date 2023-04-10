import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as React from "react";
import NavBar from "./components/NavBar";
import body_content from "./components/body_content";


export default function App() { 
  return (
    <body>
      <div className='app'>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/profile"></Route>
            <Route path="/projects"></Route>
            <Route path="/accueil" element={<body_content />} />
            <Route path="/" element={<body_content />}></Route>
            <Route path="/Connexion"></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}
