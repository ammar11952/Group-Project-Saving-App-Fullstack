const routes = require('express').Router();
const controller = require('../controller/controller');
const requireAuth = require('../auth.middleware');

routes
  .route('/api/goal')
  .post(requireAuth, controller.createGoal)
  .get(requireAuth, controller.getGoal)
  .put(requireAuth, controller.updateGoal);

routes
  .route('/api/transaction')
  .post(requireAuth, controller.createTransaction)
  .get(requireAuth, controller.getTransaction)
  .delete(requireAuth, controller.deleteTransaction);

routes.route('/api/balance').get(requireAuth, controller.getBalance);
// .put((req, res) => {
//   console.log('Hello papa');
//   res.status(200);
// });
routes.route('/auth/signup').post();
routes.route('/auth/login').post();

module.exports = routes;
