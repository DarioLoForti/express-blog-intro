require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const postsController = require('./controllers/posts');

// Middleware per servire file statici
app.use(express.static('public'));
app.use(express.json());

// Rotta per la homepage
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1><h1>I miei <a href="http://localhost:3000/posts">Post</a></h1><style>body{background-color: black; color: white;} a{text-decoration: none; color: white;}</style>');
});

// Rotta per ottenere i post
app.get('/posts', postsController.get);

// Rotta per aggiungere un nuovo post
app.post('/posts', postsController.post);


app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
