const model = require('../models/model');

async function createGoal(req, res) {
  console.log('createGoal');
  const Create = new model.GoalAmount(req.body);
  await Create.save(function (err) {
    if (!err) return res.json(Create);
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` });
  });
}

//  get: http://localhost:8080/api/goal
async function getGoal(req, res) {
  console.log('getGoal');
  let data = await model.GoalAmount.findOne({});

  // let filter = await data.map((v) =>
  //   Object.assign({}, { type: v.type, color: v.color })
  // );
  return res.json(data);
}

//  update: http://localhost:8080/api/goal
async function updateGoal(req, res) {
  console.log('updateGoal');
  //console.log(res.body);
  //model.GoalAmount.findOneAndUpdate({}, req.body);
  //console.log();
  /*const Create = new model.Categories({
    type: 'Investment',
    color: '#FCBE44',
  });*/
  //checking if inserted:
  let doc = await model.GoalAmount.findOneAndUpdate({}, req.body);
  // console.log('step1: ', doc.amount); // 'Jean-Luc Picard'

  doc = await model.GoalAmount.findOne({});
  // console.log('step2: ', doc.amount); // 59
  //console.log('1: ', doc.amount);
  //console.log('2: ', req.body.amount);
  //if (doc.amount == req.body.amount)
  return res.status(200).json(doc);
  //return res
  //  .status(400)
  //  .json({ message: `Error while updating goal incorrect request` });

  // await Create.save(function (err) {
  //   if (!err) return res.json(Create);
  //   return res
  //     .status(400)
  //     .json({ message: `Error while creating categories ${err}` });
  // });
}

//  post: http://localhost:8080/api/transaction
async function createTransaction(req, res) {
  if (!req.body) return res.status(400).json('Post HTTP Data not Provided');
  let { name, type, amount } = req.body;
  console.log(req.body);

  const create = await new model.Transaction({
    name,
    type,
    amount,
    date: new Date(),
  });

  create.save(function (err) {
    if (!err) return res.json(create);
    return res
      .status(400)
      .json({ message: `Erro while creating transaction ${err}` });
  });
}

//  get: http://localhost:8080/api/transaction
async function getTransaction(req, res) {
  let data = await model.Transaction.find({});
  return res.json(data);
}

//  delete: http://localhost:8080/api/transaction
async function deleteTransaction(req, res) {
  if (!req.body) res.status(400).json({ message: 'Request body not Found' });
  await model.Transaction.deleteOne(req.body, function (err) {
    if (!err) res.json('Record Deleted...!');
  })
    .clone()
    .catch(function (err) {
      res.json('Error while deleting Transaction Record');
    });
}

// //  get: http://localhost:8080/api/labels
// async function get_Labels(req, res) {
//   model.Transaction.aggregate([
//     {
//       $lookup: {
//         from: 'categories',
//         localField: 'type',
//         foreignField: 'type',
//         as: 'categories_info',
//       },
//     },
//     {
//       $unwind: '$categories_info',
//     },
//   ])
//     .then((result) => {
//       let data = result.map((v) =>
//         Object.assign(
//           {},
//           {
//             _id: v._id,
//             name: v.name,
//             type: v.type,
//             amount: v.amount,
//             color: v.categories_info['color'],
//           }
//         )
//       );
//       res.json(data);
//     })
//     .catch((error) => {
//       res.status(400).json('Looup Collection Error');
//     });
// }

//  get: http://localhost:8080/api/balance
async function getBalance(req, res) {
  let add = await model.Transaction.find({ type: 'Add' });
  let sub = await model.Transaction.find({ type: 'Sub' });
  const pos = add.reduce((acc, cur) => cur.amount + acc, 0);
  const neg = sub.reduce((acc, cur) => cur.amount + acc, 0);
  console.log('pos: ', pos);
  console.log('neg: ', neg);
  let papa = pos - neg;
  return res.json({ papa });
}

module.exports = {
  createGoal,
  getGoal,
  updateGoal,
  createTransaction,
  getTransaction,
  deleteTransaction,
  getBalance,
};
