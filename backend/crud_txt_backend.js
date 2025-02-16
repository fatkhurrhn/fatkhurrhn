const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const FILE_PATH = "data.txt";

app.use(express.json());
app.use(cors());

// Load data dari file
const loadData = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, "utf8");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

// Simpan data ke file
const saveData = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), "utf8");
};

// GET all data
app.get("/data", (req, res) => {
  res.json(loadData());
});

// POST new item
app.post("/data", (req, res) => {
  const { name, image, link } = req.body;
  const items = loadData();
  const newItem = { id: Date.now(), name, image, link };
  items.push(newItem);
  saveData(items);
  res.status(201).json(newItem);
});

// PUT (update item)
app.put("/data/:id", (req, res) => {
  const { id } = req.params;
  const { name, image, link } = req.body;
  let items = loadData();
  items = items.map((item) => (item.id == id ? { ...item, name, image, link } : item));
  saveData(items);
  res.json({ message: "Updated successfully" });
});

// DELETE item
app.delete("/data/:id", (req, res) => {
  const { id } = req.params;
  let items = loadData();
  items = items.filter((item) => item.id != id);
  saveData(items);
  res.json({ message: "Deleted successfully" });
});

// Jalankan server di port 5000
app.listen(5000, () => {
  console.log("Server running on https://fatkhurrhn.vercel.app");
});
