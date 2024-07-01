import express, { query } from 'express'
import  db from './db.js'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const uploadsDirProduk = path.join(__dirname, 'uploads', 'produk')

if (!fs.existsSync(uploadsDirProduk)) {
    fs.mkdirSync(uploadsDirProduk, { recursive: true })
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
  const upload = multer({ storage: storage })

// ------------------------------------------PRODUK------------------------------------
app.get('/produk',  (req,res)=>{
    const q = "SELECT * FROM produk"

    db.query(q,(err, data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
})

// fetch produk per id
app.get('/produk/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM produk WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }
    const { foto, ...produkData } = results[0];
    const fotoURL = foto ? `http://localhost:8800/uploads/produk/${foto}` : null;
    res.json({ ...produkData, foto: fotoURL }); 
  });
})

// UPLOAD PRODUK
app.post('/produk', upload.single('foto'), (req, res)=>{
    const query = "INSERT INTO produk (`nama_produk`, `harga`, `kategori`, `foto`) VALUES (?,?,?,?)"

    const { nama_produk, harga, kategori } = req.body

    const foto = req.file ? req.file.filename : null
   

    db.execute(query, [nama_produk, harga, kategori, foto], (err, result) => {
        if (err) {
          console.error('Error mengisi data', err)
          res.status(500).send('Terjadi error saat memproses request anda')
          return
        }
        res.status(200).send('Sukses menambahkan data.')
    })  
})
//BUAT UPDATE PRODUK
app.put('/produk/:id', upload.single('foto'), (req, res) => {
  const { id } = req.params;
  const { nama_produk, harga, kategori } = req.body;
  const foto = req.file ? req.file.filename : null;

  // Get the old photo
  const selectQuery = 'SELECT foto FROM produk WHERE id = ?';
  db.query(selectQuery, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query error', details: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Produk tidak ditemukan' });
    }

    const oldFoto = results[0].foto;

    // pilih foto lama atau foto baru buat di pake
    const newFoto = foto || oldFoto;

    const updateQuery = 'UPDATE produk SET nama_produk = ?, harga = ?, kategori = ?, foto = ? WHERE id = ?';
    db.query(updateQuery, [nama_produk, harga, kategori, newFoto, id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Database update error', details: err });
      }

      // hapus file lama kalau upload file baru
      if (oldFoto && req.file) {
        const oldFilePath = path.join(__dirname, 'uploads', oldFoto);
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            console.error('Error deleting old file:', err);
          }
        });
      }

      res.status(200).json({ message: 'Produk sukses diupdate' });
    });
  });
});

app.use('/uploads/produk', express.static(path.join(__dirname, 'uploads', 'produk')))

// BUAT HAPUS PRODUK
app.delete('/produk/:id', (req,res)=>{
  const {id} = req.params
  const getFilenameQuery = 'SELECT foto FROM produk WHERE id = ?'
  db.query(getFilenameQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete product.' })
    }

    // Assuming result[0].foto contains the filename
    const filename = result[0].foto

    // Delete from database
    const deleteQuery = 'DELETE FROM produk WHERE id = ?'
    db.query(deleteQuery, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete product.' })
      }

      // Delete the file from filesystem
      if (filename) {
        const filePath = path.join(uploadsDirProduk, filename)
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err)
            return res.status(500).json({ error: 'Failed to delete file.' })
          }
          // Respond with success message or handle as needed
          return res.status(200).json({ message: 'Product and file deleted successfully.' })
        })
      } else {
        // Respond with success message if no file to delete
        return res.status(200).json({ message: 'Product deleted successfully.' })
      }
    })
  })
})

// PRODUK DI HOMEPAGE
app.get('/produk-home', (req,res)=>{
  const q = "SELECT * FROM produk LIMIT 6"

  db.query(q,(err, data)=>{
    if(err){
      return res.json(err)
    }else{
      return res.json(data)
    }
  })
})

// ----------------------------ARTIKEL----------------------------------------------------
const uploadsDirArtikel = path.join(__dirname, 'uploads', 'artikel')

if (!fs.existsSync(uploadsDirArtikel)) {
    fs.mkdirSync(uploadsDirArtikel, { recursive: true })
}
const storageArtikel = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDirArtikel) //nama directorynya
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  const uploadArtikel = multer({ storage: storageArtikel })

// UPLOAD Artikel
app.post('/artikel', uploadArtikel.single('foto'), (req, res)=>{
  const query = "INSERT INTO artikel (`judul`, `penulis`, `isi`, `foto`) VALUES (?,?,?,?)"

  const { judul, penulis, isi } = req.body

  const foto = req.file ? req.file.filename : null

  db.execute(query, [judul, penulis, isi, foto], (err, result) => {
      if (err) {
        console.error('Error mengisi data', err)
        res.status(500).send('Terjadi error saat memproses request anda')
        return
      }
      res.status(200).send('Sukses menambahkan data.')
  })  
})

// BUAT FETCH ARTIKEL
app.get('/artikel',  (req,res)=>{
  const q = "SELECT * FROM artikel"

  db.query(q,(err, data)=>{
      if(err){
          return res.json(err)
      }else{
          return res.json(data)
      }
  })
})
// fetch artikel per id
app.get('/artikel/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM artikel WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Artikel tidak ditemukan' });
    }
    const { foto, ...artikelData } = results[0];
    const fotoURL = foto ? `http://localhost:8800/uploads/artikel/${foto}` : null;
    res.json({ ...artikelData, foto: fotoURL }); 
  });
})

// UPDATE ARTIKEL
app.put('/artikel/:id', uploadArtikel.single('foto'), (req, res) => {
  const { id } = req.params;
  const { judul, penulis, isi } = req.body;
  const foto = req.file ? req.file.filename : null;

  // Get the old photo
  const selectQuery = 'SELECT foto FROM artikel WHERE id = ?';
  db.query(selectQuery, [id], (err, results) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ message: 'Artikel tidak ditemukan' });
      return;
    }

    const oldFoto = results[0].foto;

    // Determine the photo to be used
    const newFoto = foto || oldFoto;

    const updateQuery = 'UPDATE artikel SET judul = ?, penulis = ?, isi = ?, foto = ? WHERE id = ?';
    db.query(updateQuery, [judul, penulis, isi, newFoto, id], (err, result) => {
      if (err) {
        res.status(500).json(err);
        return;
      }

      // Delete the old file if a new file is uploaded
      if (oldFoto && req.file) {
        const oldFilePath = path.join(__dirname, 'uploads', 'artikel', oldFoto);
        fs.unlink(oldFilePath, (err) => {
          if (err) {
            console.error('Error menghapus file lama:', err);
          }
        });
      }

      res.status(200).json({ message: 'Artikel sukses di update' });
    });
  });
});


// HAPUS ARTIKEL
app.delete('/artikel/:id', (req,res)=>{
  const {id} = req.params
  const getFilenameQuery = 'SELECT foto FROM artikel WHERE id = ?'
  db.query(getFilenameQuery, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete artikel.' })
    }

    // Assuming result[0].foto contains the filename
    const filename = result[0].foto

    // Delete from database
    const deleteQuery = 'DELETE FROM artikel WHERE id = ?'
    db.query(deleteQuery, [id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete artikel.' })
      }

      // Delete the file from filesystem
      if (filename) {
        const filePath = path.join('uploads','artikel', filename)
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err)
            return res.status(500).json({ error: 'Failed to delete file.' })
          }
          // Respond with success message or handle as needed
          return res.status(200).json({ message: 'Product and file deleted successfully.' })
        })
      } else {
        // Respond with success message if no file to delete
        return res.status(200).json({ message: 'Product deleted successfully.' })
      }
    })
  })
})

app.use('/uploads/artikel', express.static(path.join(__dirname, 'uploads', 'artikel')))

// ----------------------------ULASAN---------------------------------------

const uploadsDirUlasan = path.join(__dirname, 'uploads', 'produk')

if (!fs.existsSync(uploadsDirUlasan)) {
    fs.mkdirSync(uploadsDirUlasan, { recursive: true })
}
const storageUlasan = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadsDirUlasan) //nama directorynya
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
  })
  const uploadUlasan = multer({ storage: storageUlasan })

  // ----------------------------------------KONTAK---------------------------------
// KONTAK
app.post('/kontak', (req, res) => {
    const { nama_penanya, jenis_pesan, telemail, pesan } = req.body
  
    const query = 'INSERT INTO kontak (nama, jenis_pesan, telemail, pesan) VALUES (?, ?, ?, ?)'
    db.execute(query, [nama_penanya, jenis_pesan, telemail, pesan], (err, result) => {
      if (err) {
        console.error('Error mengisi data', err)
        res.status(500).send('Terjadi error saat memproses request anda')
        return
      }
      res.status(200).send('Sukses menambahkan data.')
    })
  })

app.listen(8800, ()=>{
    console.log('Connected to backend!!')
})

