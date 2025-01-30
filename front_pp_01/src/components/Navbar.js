import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to= "/"/></li>
                <li><Link to ="/login" /></li>
            </ul>
        </nav>
    )
}