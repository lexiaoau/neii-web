/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

const barData = [{ month: "Jan-19", NEII: 520, Viewer: 304, total: 824 },
{ month: "Feb-19", NEII: 896, Viewer: 418, total: 1314 },
{ month: "Mar-19", NEII: 924, Viewer: 363, total: 1287 },
{ month: "Apr-19", NEII: 760, Viewer: 286, total: 1046 }]

// let dbData = []

class DemoBarChart extends Component {

  render() {
    // let newData =  barData;
    let newData = this.props.chartData;
    console.log(newData)
    return (
      <div>
        <h2>Unique Page Per Data Source</h2>
        <BarChart width={800} height={500} data={newData}
        // margin={{top: 20, right: 30, bottom: 5}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Data Viewer" stackId="a" fill="#BDB76B" >
            <LabelList dataKey="Viewer" position="inside" />
          </Bar>
          <Bar dataKey="NEII Website" stackId="a" fill="#808000" >
            <LabelList dataKey="NEII" position="inside" />
            <LabelList position="top" />
          </Bar>
        </BarChart>
      </div>
    );
  }
}

export default DemoBarChart;
