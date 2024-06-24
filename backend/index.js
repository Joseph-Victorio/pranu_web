import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

app.use(cors())

app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pranugum_web"
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDirProduk = path.join(__dirname, 'uploads', 'produk');

if (!fs.existsSync(uploadsDirProduk)) {
    fs.mkdirSync(uploadsDirProduk, { recursive: true });
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDirProduk) //nama directorynya
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  const upload = multer({ storage: storage });


app.get('/produk',  (req,res)=>{
    const q = "SELECT * FROM produk";
    

    db.query(q,(err, data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

app.post('/produk', upload.single('foto'), (req, res)=>{
    const query = "INSERT INTO produk (`nama_produk`, `harga`, `kategori`, `foto`) VALUES (?,?,?,?)"

    const { nama_produk, harga, kategori } = req.body;

    const foto = req.file ? req.file.filename : null;
   

    db.execute(query, [nama_produk, harga, kategori, foto], (err, result) => {
        if (err) {
          console.error('Error inserting data:', err)
          res.status(500).send('An error occurred while processing your request.')
          return
        }
        res.status(200).send('Data added successfully.')
      })
    
})

app.put('/produk/:id', upload.single('foto'), (req, res) => {
  const { id } = req.params;
  
  const { nama_produk, harga, kategori, foto } = req.body;
  const query = 'UPDATE produk SET nama_produk = ?, harga = ?, kategori = ?, foto = ? WHERE id = ?';

  db.query(query, [nama_produk, harga, kategori, foto, id], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json("Product updated successfully");
    }
  });
});

app.use('/uploads/produk', express.static(path.join(__dirname, 'uploads', 'produk')));

// BUAT UPDATE PRODUK


// BUAT HAPUS PRODUK
app.delete('/produk/:id', (req,res)=>{
  const {id} = req.params
  const getFilenameQuery = 'SELECT foto FROM produk WHERE id = ?';
  db.query(getFilenameQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete product.' });
    }

    // Assuming result[0].foto contains the filename
    const filename = result[0].foto;

    // Delete from database
    const deleteQuery = 'DELETE FROM produk WHERE id = ?';
    db.query(deleteQuery, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete product.' });
      }

      // Delete the file from filesystem
      if (filename) {
        const filePath = path.join(uploadsDirProduk, filename);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).json({ error: 'Failed to delete file.' });
          }
          // Respond with success message or handle as needed
          return res.status(200).json({ message: 'Product and file deleted successfully.' })
        })
      } else {
        // Respond with success message if no file to delete
        return res.status(200).json({ message: 'Product deleted successfully.' });
      }
    })
  })
})

app.post('/kontak', (req, res) => {
    const { nama_penanya, jenis_pesan, telemail, pesan } = req.body;
  
    const query = 'INSERT INTO kontak (nama, jenis_pesan, telemail, pesan) VALUES (?, ?, ?, ?)'
    db.execute(query, [nama_penanya, jenis_pesan, telemail, pesan], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err)
        res.status(500).send('An error occurred while processing your request.')
        return
      }
      res.status(200).send('Data added successfully.')
    })
  })

app.listen(8800, ()=>{
    console.log('Connected to backend!!');
})

