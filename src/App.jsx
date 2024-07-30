import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import Informasi from "./pages/Informasi";
import Login from "./pages/auth/Login";
import Admin from "./pages/Admin"


import './App.css'

import ProdukList from "./pages/admin/produk/ProdukList";
import ArtikelList from "./pages/admin/artikel/ArtikelList";
import UlasanList from "./pages/admin/ulasan/UlasanList";
import AddProduk from "./pages/admin/produk/AddProduk";
import EditProduk from "./pages/admin/produk/EditProduk";
import AddArtikel from "./pages/admin/artikel/AddArtikel";
import EditArtikel from "./pages/admin/artikel/EditArtikel";
import ArtikelSingle from "./pages/ArtikelSingle";
import AddUlasan from "./pages/admin/ulasan/AddUlasan";
import EditUlasan from "./pages/admin/ulasan/EditUlasan";
import ProdukDetail from "./pages/ProdukDetail";
import KeranjangBelanja from "./pages/KeranjangBelanja";
import GaleriList from "./pages/admin/galeri/GaleriList";
import AddGaleri from "./pages/admin/galeri/AddGaleri";

import Genset from "./pages/kategori/Genset";
import Lighting from "./pages/kategori/Lighting"
import SoundSystem from "./pages/kategori/SoundSystem";
import Stage from "./pages/kategori/Stage";
import Paket from "./pages/kategori/Paket";
import Perlengkapan from "./pages/kategori/Perlengkapan";
import Led from "./pages/kategori/Led";
import Galeri from "./pages/Galeri";
import Register from "./pages/auth/Register";
import Perduan from "./pages/admin/kelola/Perduan";
import Penyewa from "./pages/admin/kelola/Penyewa";

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
      <Route path="/keranjang" element={<KeranjangBelanja/>}/>
      <Route path="/galeri" element={<Galeri/>}/>

       {/* Single Artikel */}
       <Route path="/artikel/:id" element={<ArtikelSingle/>}/>
       {/* PRODUCT DETAIL */}
       <Route path="/produk/:id" element={<ProdukDetail/>}/>

       {/* Produk-produk */}
       <Route path="/produk-list/genset" element={<Genset/>} />
       <Route path="/produk-list/lighting" element={<Lighting/>} />
       <Route path="/produk-list/paket" element={<Paket/>}/>
       <Route path="/produk-list/sound-system" element={<SoundSystem/>} />
       <Route path="/produk-list/stage" element={<Stage/>} />
       <Route path="/produk-list/perlengkapan" element={<Perlengkapan/>} />
       <Route path="/produk-list/led" element={<Led/>} />
      
      
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/register" element={<Register/>}/>
        <Route path="/admin/dashboard" element={<Admin/>}/>

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
        <Route path="/admin/add-ulasan" element={<AddUlasan/>}  />
        <Route path="/admin/edit-ulasan/:id" element={<EditUlasan/>}/>

        {/* Rute galeri */}
        <Route  path="/admin/galeri-list" element={<GaleriList/>}/>
        <Route  path="/admin/add-galeri" element={<AddGaleri/>}/>

        {/* rute pengaduan & penyewa*/}
        <Route path="/admin/pertanyaan-pengaduan" element={<Perduan/>}/>
        <Route path="/admin/penyewa" element={<Penyewa/>}/>
      
    </Routes>
    
  </>
  )
}

export default App
