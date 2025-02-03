import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to= "/"/>Home</li>
                <li><Link to ="/login" />Login</li>
            </ul>
        </nav>
    )
}