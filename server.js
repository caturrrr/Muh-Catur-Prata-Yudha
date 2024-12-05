
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint untuk mendapatkan semua buku
app.get("/buku", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM Buku");
        res.json(rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Endpoint untuk menambahkan buku baru
app.post("/buku", async (req, res) => {
    const { kode_buku, judul, genre } = req.body;
    try {
        await db.query("INSERT INTO Buku (kode_buku, judul, genre) VALUES (?, ?, ?)", [kode_buku, judul, genre]);
        res.status(201).send("Buku berhasil ditambahkan!");
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
