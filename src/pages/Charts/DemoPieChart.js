import React, { Component } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}];
                //   const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                //   {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];                  

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = (props) => {
    const  {device, cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props
    // console.log("handling label?");
    // console.log(props)
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
            {device + '     ' + `${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

let thisdata = {}

// const secondPieLabel = ({cx,cy,midAngle,innerRadius,outerRadius,index, piedata}) => {
const secondPieLabel = (props) => {
    const  {vary, cx,cy,midAngle,innerRadius,outerRadius,index, piedata} = props
    // console.log("handling label?");
    // console.log(props)
    // console.log(piedata);
    // console.log(index);
    // if(index > 2)
    // {
    //     return null;
    // }
    // console.log(data)
    // console.log(data[index].name);
    // eslint-disable-next-line
    const radius = 25 + innerRadius; // + (outerRadius - innerRadius)
    // eslint-disable-next-line
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    // eslint-disable-next-line
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {vary} 
      </text>
    );
 };


class DemoPieChart extends Component {
    
    render () {
        const {chartData, title} = this.props;
        thisdata = chartData
        // console.log(chartData)

        const pie1innerRadius = 90
        const pie1outerRadius = 160
        const pie2innerRadius = pie1outerRadius
        const pie2outerRadius = pie1outerRadius

        return (
            <div>
                <h3>{title}</h3>
                <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                    <Pie
                    data={chartData} 
                    cx={300} 
                    cy={200} 
                    dataKey="value"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={pie1outerRadius} 
                    fill="#8884d8"
                    >
                        {
                            data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Pie data={chartData} dataKey="value" cx={300} cy={200} innerRadius={pie2innerRadius} 
                            outerRadius={pie2outerRadius}  fill="#82ca9d" piedata={chartData}
                            label={secondPieLabel}                            
                            />
                </PieChart>
                
            </div>
        );
        
    }

}

export default DemoPieChart;
