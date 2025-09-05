

const cors = require('cors');
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())


app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"] })
})


app.use(cors({ origin: 'http://localhost:5173' }));

// Endpoint para obtener todos los emails con su id
app.get('/api/emails', (req, res) => {
  const filePath = path.join(__dirname, 'emails.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Si el archivo no existe, devolver lista vacía
      if (err.code === 'ENOENT') {
        return res.json([]);
      }
      return res.status(500).json({ error: 'No se pudo leer el archivo de emails' });
    }
    const emails = data.split('\n').filter(Boolean).map((email, idx) => ({ id: idx + 1, email }));
    res.json(emails);
  });
});

// Endpoint para guardar emails
app.post('/api/email', (req, res) => {
  const { email } = req.body;
  console.log('BODY:', req.body);
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email inválido' });
  }
  const filePath = path.join(__dirname, 'emails.txt');
  // Leer los emails existentes antes de guardar
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ error: 'No se pudo leer el archivo de emails' });
    }
    const emails = (data || '').split('\n').filter(Boolean);
    if (emails.includes(email)) {
      return res.status(409).json({ error: 'Este email ya está registrado' });
    }
    fs.appendFile(filePath, email + '\n', (err) => {
      if (err) {
        return res.status(500).json({ error: 'No se pudo guardar el email' });
      }
      res.json({ success: true });
    });
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000")
})