import React from 'react';

import SignupForm from '../components/SignupForm';

export default function Signup() {
  // return (
  //   <>
  //     <h6>This is the sign up page</h6>
  //   </>
  // );
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-2 mb-10 bg-slate-800 text-white rounded">
          My Savings App
        </h1>
        <h3 className="text-2xl py-1 mb-6 text-bold-slate-800 rounded">
          Create New Account
        </h3>

        {/* grid columns */}
        <div className="grid md:grid-cols-1 gap-4">
          <SignupForm></SignupForm>
          {/* Chart */}
          {/* <Graph></Graph> */}
          {/* Form */}
          {/* <Form></Form> */}
        </div>
      </div>
    </div>
  );
}
