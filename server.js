require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/tutorial', (req, res) => {
    res.send('this path is at /tutorial')
});

app.get('/twitter', (req, res) => {
    res.send('<h1>I am at twitter</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app is listening on ${process.env.PORT}`)
});