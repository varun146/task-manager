require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const port = process.env.PORT;
// routes

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send("hello world");
});

app.use('/api/v1/tasks', tasks);



app.listen(port, () => console.log(`server is listening on port http://localhost:${port}`));