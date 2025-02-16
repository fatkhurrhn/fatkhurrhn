const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const FILE_PATH = "data.txt";

// Baca Data
app.get("/data", (req, res) => {
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        if (err) return res.status(500).json({ error: "Gagal membaca file" });
        const items = data ? JSON.parse(data) : [];
        res.json(items);
    });
});

// Tambah Data
app.post("/data", (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text tidak boleh kosong" });
    
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        let items = data ? JSON.parse(data) : [];
        const newItem = { id: Date.now(), text };
        items.push(newItem);
        fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
            if (err) return res.status(500).json({ error: "Gagal menyimpan data" });
            res.json(newItem);
        });
    });
});

// Edit Data
app.put("/data/:id", (req, res) => {
    const { id } = req.params;
    const { text } = req.body;
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        let items = data ? JSON.parse(data) : [];
        items = items.map(item => (item.id == id ? { ...item, text } : item));
        fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
            if (err) return res.status(500).json({ error: "Gagal mengedit data" });
            res.json({ id, text });
        });
    });
});

// Hapus Data
app.delete("/data/:id", (req, res) => {
    const { id } = req.params;
    fs.readFile(FILE_PATH, "utf8", (err, data) => {
        let items = data ? JSON.parse(data) : [];
        items = items.filter(item => item.id != id);
        fs.writeFile(FILE_PATH, JSON.stringify(items), (err) => {
            if (err) return res.status(500).json({ error: "Gagal menghapus data" });
            res.json({ message: "Data dihapus" });
        });
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
