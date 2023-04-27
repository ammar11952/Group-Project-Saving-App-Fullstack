import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { chart_Data, getTotal } from '../helper/helper';
import { default as api } from '../store/apiSlice';

Chart.register(ArcElement);

export default function Graph() {
  const goalData = api.useGetGoalQuery();

  const balData = api.useGetBalanceQuery();

  let goalDisp;
  if (goalData.isFetching) {
    goalDisp = '?';
  } else if (goalData.isSuccess) {
    goalDisp = goalData.data.amount;
  } else if (goalData.isError) {
    goalDisp = 'Err';
    console.log('ERR: ', goalData.error);
  }

  let balDisp;
  if (balData.isFetching) {
    balDisp = '?';
  } else if (balData.isSuccess) {
    balDisp = balData.data.papa;
  } else if (balData.isError) {
    balDisp = 'Err';
  }

  let labelData = {
    isSuccess: true,
  };

  let graphDisp;
  if (labelData.isFetching) {
    graphDisp = <div>Fetching</div>;
  } else if (labelData.isSuccess) {
    graphDisp = <Doughnut {...chart_Data(goalDisp, balDisp)}></Doughnut>;
  } else if (labelData.isError) {
    graphDisp = <div>Error</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphDisp}
          <h3 className="mb-4 font-bold title">
            GOAL
            <span className="block text-3xl text-emerald-400">${goalDisp}</span>
            Current
            <span className="block text-3xl text-emerald-400">${balDisp}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
