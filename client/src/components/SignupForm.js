import React from 'react';
import { useForm } from 'react-hook-form';
// import List from './List';
import { default as api } from '../store/apiSlice';

export default function SignupForm() {
  const { register, handleSubmit, resetField } = useForm();
  const putSignup = api.usePutSignupMutation();

  const onSubmit = async (data) => {
    if (!data) return {};
    await putSignup({ amount: data.newGoalAmount }).unwrap();
    // resetField('amount');
  };
  const showHidePassword = () => {
    var x = document.getElementById('passwordField');
    if (x.type === 'password') {
      x.type = 'text';
      x.placeholder = 'password';
    } else {
      x.type = 'password';
      x.placeholder = '********';
    }
  };
  // const onSubmit2 = async (data) => {
  //   if (!data) return {};
  //   await addTransaction({
  //     type: data.type,
  //     amount: data.transactionAmount,
  //   }).unwrap();
  //   resetField('amount');
  // };

  return (
    <div className="form max-w-sm mx-auto w-96">
      {/* <h1 className="font-bold pb-4 text-xl">Target Amount to Save </h1> */}

      <form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-5">
          <div className="signup-form-input">
            <h6>Enter Name:</h6>
            <input
              type="text"
              {...register('fullName')}
              placeholder="eg. John Smith"
              className="form-input"
            />
            <br></br>
            <h6>Enter Email:</h6>
            <input
              type="Email"
              {...register('userName')}
              placeholder="userName123"
              className="form-input"
            />
            <br></br>
            <h6>Enter Password:</h6>
            <input
              type="Password"
              {...register('password')}
              placeholder="********"
              className="form-input"
              id="passwordField"
            />
            <div className="show-password py-2">
              <input
                className="showPass"
                type="checkbox"
                onClick={showHidePassword}
              />
              Show Password
            </div>
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full rounded">
              Signup
            </button>
          </div>
        </div>
      </form>
      {/* <h1 className="font-bold py-8 pb-4 text-xl">
        Make transaction in Savings
      </h1> */}

      {/* <form id="transaction-form" onSubmit={handleSubmit(onSubmit2)}>
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
      </form> */}

      {/* <List></List>  */}
    </div>
  );
}
