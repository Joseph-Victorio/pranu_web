import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import Informasi from "./pages/Informasi";
import Login from "./pages/auth/Login";
import Admin from "./pages/Admin"


import './App.css'
import AdminList from "./pages/admin/AdminList";
import ClientList from "./pages/admin/ClientList";
import ProdukList from "./pages/admin/ProdukList";
import ArtikelList from "./pages/admin/ArtikelList";
import UlasanList from "./pages/admin/UlasanList";

function App() {
 
  return (
  <>
   
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/tentang-kami" element={<TentangKami/>}/>
      <Route path="/produk" element={<Produk/>}/>
      <Route path="/informasi" element={<Informasi/>}/>
      
      <Route path="/admin">
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<Admin/>}/>
        <Route path="/admin/admin-list" element={<AdminList/>}/>
        <Route path="/admin/client-list" element={<ClientList/>}/>
        <Route path="/admin/produk-list" element={<ProdukList/>}/>
        <Route path="/admin/artikel-list" element={<ArtikelList/>}/>
        <Route path="/admin/ulasan-list" element={<UlasanList/>}/>
      </Route>
      
    </Routes>
    
  </>
  )
}

export default App
