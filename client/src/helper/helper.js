import _ from 'lodash';

export function getSum(transaction, type) {
  let sum = _(transaction)
    .groupBy('type')
    .map((objs, key) => {
      if (!type) return _.sumBy(objs, 'amount');
      return {
        type: key,
        color: objs[0].color,
        total: _.sumBy(objs, 'amount'),
      };
    })
    .value();
  return sum;
}

export function getLabels(transaction) {
  // let amountSum = getSum(transaction, 'type');
  // let Total = _.sum(getSum(transaction));
  // let percent = _(amountSum)
  //   .map((objs) => _.assign(objs, { percent: (100 * objs.total) / Total }))
  //   .value();
  // return percent;
}

export function chart_Data(goal, current) {
  let dataValue;
  if (current >= goal) {
    dataValue = [current];
  } else {
    dataValue = [current, goal - current];
  }
  // let trans = [
  //   { amount: 20, type: 'goal' },
  //   { amount: 30, type: 'current' },
  // ];
  // let bg = _.map(trans, (a) => a.type);
  // bg = _.uniq(bg);
  // let dataValue = getSum(transaction);
  //let dataValue = [10, 20];
  let bg = ['green', 'red']; //['Red', 'Blue'];
  const config = {
    labels: ['Savings', 'Remaining'],
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bg,
          hoverOffset: 4,
          borderRadius: 30,
          spacing: 10,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  };
  return config;
}

// export function chart_Data(transaction, custom) {
//   let bg = _.map(transaction, (a) => a.color);
//   bg = _.uniq(bg);
//   let dataValue = getSum(transaction);

//   const config = {
//     data: {
//       datasets: [
//         {
//           data: dataValue,
//           backgroundColor: bg,
//           hoverOffset: 4,
//           borderRadius: 30,
//           spacing: 10,
//         },
//       ],
//     },
//     options: {
//       cutout: 115,
//     },
//   };

//   return custom ?? config;
// }

export function getTotal(transaction) {
  return _.sum(getSum(transaction));
}
