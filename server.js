const express = require('express');

const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//server para rodar o projeto