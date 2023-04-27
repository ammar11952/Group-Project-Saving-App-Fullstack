import React from 'react';
import { useForm } from 'react-hook-form';
import List from './List';
import { default as api } from '../store/apiSlice';

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();
  const [updateGoal] = api.usePutGoalMutation();

  const onSubmit = async (data) => {
    if (!data) return {};
    await updateGoal({ amount: data.newGoalAmount }).unwrap();
    resetField('amount');
  };
  const onSubmit2 = async (data) => {
    if (!data) return {};
    await addTransaction({
      type: data.type,
      amount: data.transactionAmount,
    }).unwrap();
    resetField('amount');
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Target Amount to Save </h1>

      <form id="goal-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="goal-form-input">
            <input
              type="Number"
              {...register('newGoalAmount')}
              placeholder="Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Update Savings Goal
            </button>
          </div>
        </div>
      </form>
      <h1 className="font-bold py-8 pb-4 text-xl">
        Make transaction in Savings
      </h1>

      <form id="transaction-form" onSubmit={handleSubmit(onSubmit2)}>
        <div className="grid gap-4">
          <select className="form-input" {...register('type')}>
            <option value="Add" defaultValue>
              Add to Savings
            </option>
            <option value="Sub"> Deduct from Savings</option>
          </select>
          <div className="input-group">
            <input
              type="Number"
              {...register('transactionAmount')}
              placeholder="Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Make Transaction
            </button>
          </div>
        </div>
      </form>

      <List></List>
    </div>
  );
}
