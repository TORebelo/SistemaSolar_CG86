const express = require('express');
const path = require('path');

const app = express();
const port = 3030;

app.use(express.static(
    path.join(process.cwd(), '..', 'project'),
    {
        index: ['index.html'],
        extensions: ['js', 'module.js']
    }
));

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});