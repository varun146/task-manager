require('dotenv').config();
require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const port = process.env.PORT;
// routes

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send("hello world");
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port http://localhost:${port}`));
    } catch (err) {
        console.log(err);
    }

}


start();

