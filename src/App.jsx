import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import Informasi from "./pages/Informasi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";

import './App.css'


function App() {
 
  return (
  <>
   
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/tentang-kami" element={<TentangKami/>}/>
      <Route path="/produk" element={<Produk/>}/>
      <Route path="/informasi" element={<Informasi/>}/>
      <Route path="/admin" element={<Login/>}/>
      
    </Routes>
    
  </>
  )
}

export default App