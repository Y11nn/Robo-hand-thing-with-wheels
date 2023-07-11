const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', 'utf-8');
    return;
});

app.listen(process.env.PORT || 3000, () => console.log('Running on: http://localhost:3000'));