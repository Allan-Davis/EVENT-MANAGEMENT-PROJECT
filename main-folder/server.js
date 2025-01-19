const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const app = express();

// MySQL setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'event_manager_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

// Set up file upload using Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});
const upload = multer({ storage: storage });

// API Endpoints
app.get('/api/events', (req, res) => {
    db.query('SELECT * FROM events', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/add-event', upload.single('image'), (req, res) => {
    const { title, description, date, category } = req.body;
    const image = req.file.filename;

    const sql = 'INSERT INTO events (title, description, date, category, image) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [title, description, date, category, image], (err, results) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
