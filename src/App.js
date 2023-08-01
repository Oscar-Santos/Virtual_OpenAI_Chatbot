
    import { Routes, Route } from "react-router-dom";
    import { useState } from "react";
    import './App.css';
    import About from "./pages/About";
    import Documentation from "./pages/Documentation";
    import Nav from "./components/Nav";
    import Chatbox from "./pages/Chatbox";
    
    export default function App() {

        
        return (
            <div className="app">
                <div>
                        <Nav />
                        <Routes>
                            <Route path="/about" element={<About />}/>
                            <Route path="/chatbox" element={<Chatbox />}/>
                            <Route path="/documentation" element={<Documentation />}/>           
                        </Routes>
                 </div>    
            </div>
        );
    }