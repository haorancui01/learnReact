// import "./App.css";
// import { useState, createContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Menu } from "./pages/Menu";
// import { Contact } from "./pages/Contact";
// import { Profile } from  "./pages/Profile";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// export const AppContext = createContext();

// function App() {
//     const client = new QueryClient();

//     const [ username, setUsername ] = useState("JackCui");

//     return (
//         <div className="App">
//             <AppContext.Provider value={{ username, setUsername }}>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Home username={username} />} />
//                     <Route 
//                         path="/profile" 
//                         element={<Profile />} 
//                     />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="*" element={<h1>Page not found</h1>}/>
//                 </Routes>
//             </Router>
//             </AppContext.Provider>
//         </div>
//     ) 
// }

// export default App;