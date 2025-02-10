import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="container">
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to ="/login">Login</Link></li>
                <li><Link to="/MainInventory">Main inventory</Link></li>
            </ul>
        </nav>
    )
}