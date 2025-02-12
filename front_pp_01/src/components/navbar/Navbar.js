import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div class="d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">MRPG</a>
                    <ul class="navbar-nav">
                        <li class="nav-item"><Link to= "/">Home</Link></li>
                        <li class="nav-item"><Link to ="/login">Login</Link></li>
                        <li class="nav-item"><Link to="/MainInventory">Main inventory</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}