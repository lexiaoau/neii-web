
import React, { Component } from 'react';

import fetchJsonp from 'fetch-jsonp';

import DemoBarChart from '../Charts/DemoBarChart';

class DisplayBarChart extends Component {
    constructor() {
        super()  
        
        this.state = {                // set class state
            chart_data: []
        }        
    }  

    componentDidMount() {
        
        // console.log(process.env.NODE_ENV)
        // console.log(process.env.REACT_APP_DATA_SRC)

        // const bar_url = 'http://nemsr-vd-01.bom.gov.au/cgi-bin/neii_analytics/get_neii_pageviews_component.py'
        
        // console.log('bar_url is ' + bar_url)

        // fetchJsonp(bar_url, 
        // {
        //     timeout: 3000,
        //     jsonpCallbackFunction: 'get_neii_pageviews_component'                
        // })
        // .then(function (response) {
        //     // console.log(response)
        //     return response.json()
        // }).then( (jsonData) => {
        //     console.log(jsonData)
        //     let arr = jsonData.sort( (a,b) => a.reportmonth.localeCompare(b.reportmonth) );
        //     // console.log(arr)

        //     const month_names_short = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        //     let currentMonth = '';
        //     let currentObj = {};
        //     let currentTotal = 0;
        //     let resultList = [];
        //     for (var i = 0; i < arr.length; i++) {
        //         // console.log(arr[i]);
        //         // console.log(currentMonth);
        //         // console.log(arr[i].reportmonth);

        //         const thisMonthInt = parseInt(arr[i].reportmonth.substring(5,7))
        //         const thisYear = arr[i].reportmonth.substring(0,4)

        //         const thisYearMonth = month_names_short[thisMonthInt] + '-' + thisYear

        //         if( currentMonth.length === 0 )
        //         {
        //             currentMonth = thisYearMonth;
        //             currentObj.month = thisYearMonth;
        //             currentObj[arr[i].datasource] = arr[i].sumup
        //             currentTotal = currentTotal + arr[i].sumup
        //         }
        //         else if( currentMonth === thisYearMonth )
        //         {
        //             currentObj[arr[i].datasource] = arr[i].sumup
        //             currentTotal = currentTotal + arr[i].sumup
        //         }
        //         else
        //         {
        //             currentObj.total = currentTotal;
        //             resultList.push(currentObj)
        //             currentObj = {}
        //             currentTotal = 0
        //             currentMonth = thisYearMonth
        //             currentObj.month = thisYearMonth;
        //             currentObj[arr[i].datasource] = arr[i].sumup
        //             currentTotal = currentTotal + arr[i].sumup
        //         }
        //         //Do something
        //     }
        //     currentObj.total = currentTotal;
        //     resultList.push(currentObj)
        //     // console.log(resultList)

        //     this.setState({
        //         chart_data: resultList
        //     })          
        // }).catch(function (ex) {
        //     console.log('parsing failed', ex)
        // })

        // this.setState({
        //     chart_data: resultList
        // })  
    }    

    render() {
        // console.log("rendering...");
        // console.log(this.state.chart_data)
        return(
            <div>
                {
                    this.state.chart_data.length > 0 && <DemoBarChart chartData={this.state.chart_data} />
                }               
            </div>
        )
    }
}

export default DisplayBarChart;

