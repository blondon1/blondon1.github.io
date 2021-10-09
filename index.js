//Discord AU TEST
const express = require('express');
const { port } = require('./config.json');

const app = express();

app.get('/', (request, response) => {
    return response.sendFile('dist/index.js', { root: '.' });
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

