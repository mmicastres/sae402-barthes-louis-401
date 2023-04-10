import * as React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <header className="navbar">
          <div class="topnav">
            <Link to="/accueil" class="active">Home</Link>
            <a href="/connexion">Connexion</a>
            <a href="/profile">Profile</a>
            <a href="/all_product">All projects</a>
            <input type="text" placeholder="Search.." />
          </div>
        </header>
    )
}