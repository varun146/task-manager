const Tasks = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');
const createTask = asyncWrapper(async (req, res) => {
        const task = await Tasks.create(req.body);
        res.status(201).send({task});
})

const getTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Tasks.findOne({_id: taskID});
        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}`, 404));
        }
        res.status(200).json({task});
});

const getAllTasks =  asyncWrapper(async (req, res) => {
        const tasks = await Tasks.find({});
        res.status(200).json({tasks});
});


const updateTask = asyncWrapper(async (req, res) => {
        const {id: taskID} = req.params;
        const task = await Tasks.findOneAndUpdate({_id: taskID }, req.body, {
            new: true,
            runValidators: true
        }) 
        res.status(200).json({id: taskID, data: req.body});
});

const editTask = asyncWrapper(async (req, res) => {
        const {id: taskID} = req.params;
        const task = await Tasks.findOneAndUpdate({_id: taskID }, req.body, {
            new: true,
            runValidators: true,
            overwrite: true
        }) 
        if(!task) {
            return next(createCustomError(`No task with id: ${taskID}`, 404));
        }
        res.status(200).json({id: taskID, data: req.body});
});

const deleteTask = asyncWrapper(async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Tasks.findOneAndDelete({_id: taskID});
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`, 404));
        }
        res.status(200).json({task});
});


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask
};