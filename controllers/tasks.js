const Tasks = require('../models/Task');
const createTask = async (req, res) => {
    const task = await Tasks.create(req.body);
    res.status(201).send({task});
}

const getAllTasks = ((req, res) => {
    res.send("all items from the file");
});

const getTask = ((req, res) => {
    res.send("get a single task");
});

const updateTask = ((req, res) => {
    res.send("update a task");
});

const deleteTask = ((req, res) => {
    res.send("delete a task");
});


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};