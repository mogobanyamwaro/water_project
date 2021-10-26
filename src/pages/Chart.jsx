import React, { Fragment } from 'react';
import Chart from '../components/chart/Chart';
import { userData, litresData } from '../dummyData';
import BarCharts from '../components/chart/BarChart';

function Charts() {
  return (
    <Fragment>
      <Chart
        title="Smart Water Analytics"
        grid
        dataKey="Total Revenue"
        data={userData}
      />
      <BarCharts
        data={litresData}
        dataKey="Total Litres"
        title="Total Litres"
      />
    </Fragment>
  );
}

export default Charts;
