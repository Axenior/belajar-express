const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(expressLayout);
app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.sendFile(__dirname + '/index.html');
    const berita = [
        {
            judul: 'Berita 1',
            isi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi dolores debitis, voluptate exercitationem voluptatum nemo saepe qui porro vitae. Molestiae accusamus, aliquam iste odit eum facere suscipit qui minus. Quasi autem velit est quia nulla.'
        },
        {
            judul: 'Berita 2',
            isi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur eos illo aliquam unde beatae facilis, assumenda minus voluptatem perspiciatis! Tempora perferendis quidem magni quia sint, inventore aut! Quam molestiae perferendis eligendi, sunt nemo maiores sapiente impedit tempore eius esse.'
        }
    ]
    res.render('index', {title: 'Halaman Home', berita, layout: "main"});
});

app.get('/about', (req, res) => {
    // res.send('About Us');
    // res.sendFile(__dirname + '/about.html');
    res.render('about', {title: "Halaman About", layout: "main"});
});

app.get('/contact', (req, res) => {
    // res.send('Contact Us');
    // res.sendFile(__dirname + '/contact.html');
    res.render('contact', {title: "Halaman Contact", layout: "main"});
});

app.get('/prodi', (req, res) => {
    const prodi = [
        {
            nama_prodi: 'Sistem Informasi',
            fakultas: 'FIKR',
            singkatan: 'SI'
        },
        {
            nama_prodi: 'Informatika',
            fakultas: 'FIKR',
            singkatan: 'IF'
        },
        {
            nama_prodi: 'Teknik Elektro',
            fakultas: 'FIKR',
            singkatan: 'TE'
        },
        {
            nama_prodi: 'Manajemen Informatika',
            fakultas: 'FIKR',
            singkatan: 'MI'
        },
        {
            nama_prodi: 'Manajemen',
            fakultas: 'FEB',
            singkatan: 'MJ'
        },
        {
            nama_prodi: 'Akuntansi',
            fakultas: 'FEB',
            singkatan: 'AK'
        },
    ]
    res.render('prodi',{title: 'Halaman Prodi', prodi, layout: "main"});
})

app.get('/mahasiswa', (req, res) => {
    res.json({
        "status": "success",
        "message": "Data Mahasiswa",
        "data": [
            {
                "npm": 2226240034,
                "nama": "Matius Stephen"
            },
            {
                "npm": 2226240016,
                "nama": "Bryan Penuntun"
            },
            {
                "npm": 2226240043,
                "nama": "Yulianus Jonathan"
            }
        ]
    });
});

app.get('/dosen', (req, res) => {
    res.json({
        status: "success",
        message: "Data Dosen",
        data: [
            {
                prodi: "Sistem Informasi",
                dosen: [
                    "Iis", 
                    "Faris", 
                    "Dafid"
                ]
            },
            {
                prodi: "Informatika",
                dosen: [
                    "Derry", 
                    "Siska", 
                    "Yohannes"
                ]
            }
        ]
    })
})

// ------------------------
app.post('/', (req, res) => {
    res.send('Got a POST request');
})

app.put('/user', (req,res) => {
    res.send('Got a PUT request at /user');
})

app.delete('/users', (req, res) => {
    res.send('Got a DELETE request at /user');
})

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})
// ----------------------------

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// handler route yg tdk terdaftar
app.use("/", (req, res) => {
    res.send("<h1> 404 Not Found <h1>");
})