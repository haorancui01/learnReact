import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from  "./pages/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


function App() {
    const client = new QueryClient({defaultOptions:{
        queries: {
            refetchOnWindowFocus: true, 
        },
    }});

    return (
        <div className="App">
            <QueryClientProvider client={client}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>
            </Router>
            </QueryClientProvider>
        </div>
    ) 
}

export default App;