import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg">
            <ul class="navbar-nav">
                <li class="nav-item"><Link to= "/">Home</Link></li>
                <li class="nav-item"><Link to ="/login">Login</Link></li>
                <li class="nav-item"><Link to="/MainInventory">Main inventory</Link></li>
            </ul>
        </nav>
    )
}