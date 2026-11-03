const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());


app.get('/create', (req, res) => {
    fs.writeFile('data.txt', 'Hello from Express!', (err) => {
        if (err) {
            return res.status(500).send('Error creating file');
        }
        res.send('File created successfully!');
    });
});


app.get('/read', (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(data);
    });
});

app.get('/append', (req, res) => {
    fs.appendFile('data.txt', '\nNew data added!', (err) => {
        if (err) {
            return res.status(500).send('Error appending data');
        }
        res.send('Data appended successfully!');
    });
});


app.get('/delete', (req, res) => {
    fs.unlink('data.txt', (err) => {
        if (err) {
            return res.status(500).send('Error deleting file');
        }
        res.send('File deleted successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});