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

app.listen(8800, ()=>{
    console.log('Connected to backend!!');
})

