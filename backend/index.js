import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pranugum_web"
})

app.get('/produk', (req,res)=>{
    const q = "SELECT * FROM produk";

    db.query(q,(err, data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.post('/produk', (req, res)=>{
    const q = "INSERT INTO produk (`nama_produk`, `harga`, `kategori`, `foto`) VALUES (?)"

    const values = [
        req.body.nama_produk,
        req.body.harga,
        req.body.kategori,
        req.body.foto,
    ]

    db.query(q,[values], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Produk berhasil ditambahkan!")
    })
})

app.listen(8800, ()=>{
    console.log('Connected to backend!!');
})

