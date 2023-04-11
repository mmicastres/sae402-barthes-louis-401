import * as React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div class="topnav">
        <Link to="/accueil" class="active">Home</Link>
        <Link to="/projects" class="active">All projects</Link>
        <Link to="/connexion" class="active">Connexion</Link>
        <Link to="/profile" class="active">Profile</Link>
        <input type="text" placeholder="Search.." />
      </div>
    </header>
  )
}