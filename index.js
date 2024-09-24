const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(__dirname + '/home.html');
});

app.get('/about', (req, res) => {
    // res.send('About Us');
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
    // res.send('Contact Us');
    res.sendFile(__dirname + '/contact.html');
});

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

app.use("/", (req, res) => {
    res.send("<h1> 404 Not Found <h1>");
})