const driverController = require('../controllers/driver_controller');
module.exports = (app) => {
    app.get('/drivers', driverController.all);
    app.post('/api/drivers', driverController.create);
    app.patch('/api/drivers/:id', driverController.edit);
    app.delete('/api/drivers/:id', driverController.deleteDriver);
}