import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import { Navbar } from "./components";

function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />           
            </Routes>
        </Router>
    );
}

export default App;