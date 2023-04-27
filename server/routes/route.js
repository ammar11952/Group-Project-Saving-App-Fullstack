const routes = require('express').Router();
const controller = require('../controller/controller');

routes
  .route('/api/goal')
  .post(controller.createGoal)
  .get(controller.getGoal)
  .put(controller.updateGoal);

routes
  .route('/api/transaction')
  .post(controller.createTransaction)
  .get(controller.getTransaction)
  .delete(controller.deleteTransaction);

routes.route('/api/balance').get(controller.getBalance);
// .put((req, res) => {
//   console.log('Hello papa');
//   res.status(200);
// });

module.exports = routes;
