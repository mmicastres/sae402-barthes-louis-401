import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as React from "react";
import NavBar from "./components/NavBar";
import Bodycontent from "./components/bodycontent";
import Allcards from "./components/allcards"
import Connectform from "./components/formconnexion"

export default function App() {
  return (
    <body>
      <div className='app'>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/profile"></Route>
            <Route path="/projects" element={<Allcards />} />
            <Route path="/accueil" element={<Bodycontent />} />
            <Route path="/" element={<Bodycontent />} />
            <Route path="/connexion" element={<Connectform />} />
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}
