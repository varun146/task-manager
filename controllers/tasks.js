const Task = require('../models/Task');
const Tasks = require('../models/Task');

const createTask = async (req, res) => {
    try {
        const task = await Tasks.create(req.body);
        res.status(201).send({task});
    } catch(err) {
        res.status(500).json({message: err});
    }
}

const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        if(!task) {
            return res.status(404).json({msg:`No task with id: ${taskID}`});
        }
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({message: err});
    }
};

const getAllTasks =  async (req, res) => {
    try {
        const tasks = await Tasks.find({});
        res.status(200).json({tasks});
    } catch(err) {
        res.status(500).json({message: err});
    }
};


const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID }, req.body, {
            new: true,
            runValidators: true
        }) 
        res.status(200).json({id: taskID, data: req.body});
    } catch (err) {
        res.status(500).json({message: err})
    }
};

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task){
            return res.status(404).json({message:`No task with id: ${taskID}` });
        }
        res.status(200).json({task});
    } catch (err) {
        res.status(500).json({message: err});
    }
};


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};