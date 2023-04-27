import React from 'react';
import 'boxicons';
import { default as api } from '../store/apiSlice';

export default function List() {
  //const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransaction] = api.useDeleteTransactionMutation();
  const { data, isFetching, isSuccess, isError } = api.useGetTransactionQuery();
  let Transactions;

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    // console.log(data);
    Transactions = data.map((v, i) => (
      <Transaction key={i} category={v} handler={handlerClick}></Transaction>
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History of Transactions</h1>
      {Transactions}
    </div>
  );
}

function Transaction({ category, handler }) {
  // console.log('Cat: ', category, 'han: ', handler);
  // if (!category) return null;
  if (category.type === 'Add')
    return (
      <div
        className="item flex justify-center bg-gray-50 py-2 rounded-r"
        style={{ borderRight: `15px solid ${'#39C65C'}` }}
      >
        <button className="px-3" onClick={handler}>
          <box-icon
            data-id={category._id ?? ''}
            color={'#39C65C'}
            size="15px"
            name="trash"
          ></box-icon>
        </button>
        <span className="block w-full">
          Added ${category.amount ?? 'loading'} to Savings
        </span>
      </div>
    );
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `15px solid ${'#FC4A4A'}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          data-id={category._id ?? ''}
          color={'#FC4A4A'}
          size="15px"
          name="trash"
        ></box-icon>
      </button>
      <span className="block w-full">
        Deducted ${category.amount ?? 'loading'} from Savings
      </span>
    </div>
  );
}
