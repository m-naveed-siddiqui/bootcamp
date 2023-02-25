// external modules
const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
// created modules
const User = require('./Models/User');
const Middlewares = require('./middlewares.js');
require('./config/database');

// modules initialization
const app = express();

// Parse cookie
app.use(cookieParser());
// Parse body
app.use(express.json());

// custom middlewares
Middlewares(app, jwt);


// APIs
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.post('/register', async (req, res) => {
    try {
        const result = await User.create(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send('Oops! '+error.message);
    }
});
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    result = User.find({email:email, password}, {}, (error, result) => {
        if (error) {
            res.status(400).send('Oops! '+error.message);
        }
        if (result.length) {
            const payload = {
                id: result[0]['_id'],
                role: result[0].role
            }
            const token = jwt.sign(payload, process.env.JWT_KEY);
            res.cookie('authenticate_token', token);
            res.send(result);
        } else {
            res.status(401).send('Wrong Credentials!');
        }
    });
});
app.get('/dashboard', async (req, res) => {
    res.send("Welcome on Dashboard");
});
app.get('/admin', (req, res) => {
    res.send('Welcome on Admin Panel')
});
app.get('/dashboard/students', (req, res) => {
    res.send('List of Students appear here');
});
app.post('/logout', (req, res) => {
    res.clearCookie('authenticate_token');
    // res.redirect('/');
    res.send('Successfully Logout');
});
app.get('/*', (req, res) => {
    res.status(404).send('Page Not Found');
});

// listen server
const port = 5000;
app.listen(port, () => console.log(`Server is running on port: ${port}`));