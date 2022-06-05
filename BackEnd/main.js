import express from "express";
import bodyParser from 'body-parser';

const app = express();
const PORT = 4362;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[TEST]!');

    res.send('Hello From MainPage.');
});

app.listen(PORT, () => console.log(`Server Started at Port: http://localhost:${PORT}`));