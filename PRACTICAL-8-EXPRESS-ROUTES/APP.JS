const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route 1
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// Route 2
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Route 3
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Route 4
app.post('/contact', (req, res) => {
    res.send('Thank you ' + req.body.name);
});

// Route 5
app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: 'Aman' },
        { id: 2, name: 'Riya' }
    ]);
});

// Route 6
app.post('/users', (req, res) => {
    res.json({
        message: 'User added successfully',
        data: req.body
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});                   
