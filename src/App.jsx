import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import Informasi from "./pages/Informasi";
import Login from "./pages/auth/Login";
import Admin from "./pages/Admin"


import './App.css'
import AdminList from "./pages/admin/AdminList";
import ClientList from "./pages/admin/ClientList";
import ProdukList from "./pages/admin/produk/ProdukList";
import ArtikelList from "./pages/admin/artikel/ArtikelList";
import UlasanList from "./pages/admin/UlasanList";
import AddProduk from "./pages/admin/produk/AddProduk";
import EditProduk from "./pages/admin/produk/EditProduk";
import AddArtikel from "./pages/admin/artikel/AddArtikel";
import EditArtikel from "./pages/admin/artikel/EditArtikel";
import ArtikelSingle from "./pages/ArtikelSingle";

function App() {
 
  return (
  <>
    <Toaster 
      position="top-center"
      reverseOrder={false}/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/tentang-kami" element={<TentangKami/>}/>
      <Route path="/produk" element={<Produk/>}/>
      <Route path="/informasi" element={<Informasi/>}/>

       {/* Single Artikel */}
       <Route path="/artikel/:id" element={<ArtikelSingle/>}/>
      
      <Route path="/admin">
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<Admin/>}/>
        <Route path="/admin/admin-list" element={<AdminList/>}/>
        <Route path="/admin/client-list" element={<ClientList/>}/>
      {/* rute produk */}
        <Route path="/admin/produk-list" element={<ProdukList/>}/>
        <Route path="/admin/add-produk" element={<AddProduk/>}/>
        <Route path="/admin/edit-produk/:id" element={<EditProduk/>} />
         {/* Rute Artikel */}
        <Route path="/admin/artikel-list" element={<ArtikelList/>}/>
        <Route path="/admin/add-artikel" element={<AddArtikel/>}/>
        <Route path="/admin/edit-artikel/:id" element={<EditArtikel/>}/>
       
         {/* Rute Ulasan */}
        <Route path="/admin/ulasan-list" element={<UlasanList/>}/>
      </Route>
      
    </Routes>
    
  </>
  )
}

export default App
