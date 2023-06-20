
const task = require('../models/task.model');


module.exports = {

    createTask: (req, res) => {
        task.create(req.body)
            .then(newTask => res.json(newTask))
            .catch(err => res.status(400).json(err));
    },
    getAllTask: (req, res) => {
        task.find()
            .then(allTask => { console.log('task=', allTask); res.json(allTask) })
            .catch(err => res.json(err));
    },
    getOneTask: (req, res) => {
        task.findById(req.params.id)
            .then(oneTask => res.json(oneTask))
            .catch(err => res.json(err));
    },
    updateTask: (req, res) => {
        task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedTask => res.json(updatedTask))
            .catch(err => res.json(err));
    },
    deleteTask: (req, res) => {
        task.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }

}

