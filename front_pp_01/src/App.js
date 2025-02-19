import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, MainInventory, Prueba } from "./pages";
import { Navbar, Layout} from "./components";

function App(){
    return(
        <Router>
            <Layout>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/maininventory" element={<MainInventory />} />
                    <Route path="/prueba" element={<Prueba />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;