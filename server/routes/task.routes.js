const TaskController = require('../controllers/task.controller');

module.exports = app => {
    app.get('/api/task', TaskController.getAllTask);
    app.post('/api/create', TaskController.createTask);
    app.get('/api/task/:id', TaskController.getOneTask);
    app.patch('/api/task/edit/:id', TaskController.updateTask);
    app.delete('/api/task/edit/:id', TaskController.deleteTask);
}