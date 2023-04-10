import './App.css';

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import * as React from "react";
import NavBar from "./components/NavBar"


function App() { 
  return (
    <body>
      <div className='app'>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/profile"></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </body>
  );
}

export default App;
