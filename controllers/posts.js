const posts = require('../posts.json');
const { writeJSON, readJSON } = require("../functions.js");

module.exports = {
    get: (req, res) => {
        res.format({
            html: () => {
                let html = '<main>';
                posts.forEach((post) => {
                    html += `
                    <article>
                        <h2>${post.title}</h2>
                        <img width="500" src="/${post.image}" alt="${post.title}">
                        <p>${post.content}</p>
                        <h4>Tags:</h4>
                        <ul>`;
                    post.tags.forEach(tag => {
                        html += `<li>${tag}</li>`;
                    });
                    html += `</ul>
                    </article> `;
                });
                html += '</main> <style>body{background-color: black; color: white;} p{font-size: 20px;}</style> ';
                res.send(html);
            },
            json: () => {
                res.json({
                    data: posts,
                    count: posts.length,
                    description: 'Lista dei post'
                });
            }
        });
    },
    post: (req, res) => {
        const posts = readJSON('posts');
        writeJSON('posts', [...posts, req.body]);
        res.send('Post aggiunto al file JSON');
    }
};
