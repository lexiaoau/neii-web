import React, { Component } from 'react';
import { CartesianGrid,
  XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';

const fakeLineChartData = [ {"ga_date": "20190401", "sumUni": 59.0},
  {"ga_date": "20190402", "sumUni": 36.0},
  {"ga_date": "20190403", "sumUni": 58.0},
  {"ga_date": "20190404", "sumUni": 63.0},
  {"ga_date": "20190405", "sumUni": 33.0},
  {"ga_date": "20190406", "sumUni": 21.0},
  {"ga_date": "20190407", "sumUni": 17.0},
  {"ga_date": "20190408", "sumUni": 67.0},
  {"ga_date": "20190409", "sumUni": 34.0},
  {"ga_date": "20190410", "sumUni": 40.0},
  {"ga_date": "20190411", "sumUni": 30.0},
  {"ga_date": "20190412", "sumUni": 45.0},
  {"ga_date": "20190413", "sumUni": 13.0},
  {"ga_date": "20190414", "sumUni": 14.0},
  {"ga_date": "20190415", "sumUni": 40.0},
  {"ga_date": "20190416", "sumUni": 55.0},
  {"ga_date": "20190417", "sumUni": 45.0},
  {"ga_date": "20190418", "sumUni": 59.0},
  {"ga_date": "20190419", "sumUni": 13.0},
  {"ga_date": "20190420", "sumUni": 10.0},
  {"ga_date": "20190421", "sumUni": 10.0},
  {"ga_date": "20190422", "sumUni": 13.0},
  {"ga_date": "20190423", "sumUni": 29.0},
  {"ga_date": "20190424", "sumUni": 25.0},
  {"ga_date": "20190425", "sumUni": 32.0},
  {"ga_date": "20190426", "sumUni": 45.0},
  {"ga_date": "20190427", "sumUni": 6.0},
  {"ga_date": "20190428", "sumUni": 5.0},
  {"ga_date": "20190429", "sumUni": 68.0},
  {"ga_date": "20190430", "sumUni": 61.0} ];  

class DemoLineChart extends Component {
    render() {
        // let newData = JSON.parse(this.props.chart_data)  
        let newData =  this.props.chartData  ; 
        // console.log('DemoLineChart');
        console.log(newData);

        return (
            <div>
                <h2>Daily Page Views</h2>
                <LineChart width={600} height={300} data={newData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis name={"Date"} interval={"preserveStartEnd"} dataKey={"ga_date"}/>
                    <YAxis type={'number'}  />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" name="Sum of page views" dataKey="sumUni" stroke="#8884d8" activeDot={{r: 8}}/>                    
                    {/* <Line type="monotone" name="Sum of page views" dataKey="sumup" stroke="#8884d8" activeDot={{r: 8}}/>                     */}
                </LineChart>
            </div>
        );        
    }
}

export default DemoLineChart;
