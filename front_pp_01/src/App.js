import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, MainInventory, SingIn, Recover} from "./pages";
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
                    <Route path="/singin" element={<SingIn />} />
                    <Route path="/recover" element={<Recover />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;