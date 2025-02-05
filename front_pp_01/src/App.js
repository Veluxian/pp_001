import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, MainInventory } from "./pages";
import { Navbar } from "./components";

function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/maininventory" element={<MainInventory />} />          
            </Routes>
        </Router>
    );
}

export default App;