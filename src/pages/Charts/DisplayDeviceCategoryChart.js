
import React, { Component } from 'react';

import fetchJsonp from 'fetch-jsonp';

import DemoPieChart from '../Charts/DemoPieChart';

class DisplayDeviceCategoryChart extends Component {
    constructor() {
        super()  
        
        this.state = {                // set class state
            chart_data: []
        }        
    }  

    componentDidMount() {
        
        // console.log(process.env.NODE_ENV)
        // console.log(process.env.REACT_APP_DATA_SRC)

        const bar_url = 'http://nemsr-vd-01.bom.gov.au/cgi-bin/neii_analytics/get_neii_mobiledevices.py?startdate=20190101&enddate=20190531'
        
        console.log('bar_url is ' + bar_url)

        fetchJsonp(bar_url, 
        {
            timeout: 3000,
            jsonpCallbackFunction: 'get_neii_mobiledevices'                
        })
        .then(function (response) {
            // console.log(response)
            return response.json()
        }).then( (jsonData) => {
            console.log(jsonData)
            const arr = jsonData.sort( (a,b) => a.reportmonth.localeCompare(b.reportmonth) );
            // console.log(arr)

            const month_names_short = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']





            let history = {};
            let lastMonth = '';
            let currentMonth = '';
            let currentObj = {};

            let monthObj = {}
            let deviceObj = {}
            
            let resultList = [];

            arr.map( item => {
                let monthStr = item.reportmonth.toString()
                let deviceStr = item.device.toString()

                monthObj[monthStr] = 1
                deviceObj[deviceStr] = 1
                history[monthStr+deviceStr] = item.sessions
            } )
            // console.log(history)

            let monthArray = Object.keys(monthObj).sort()
            let deviceArray = Object.keys(deviceObj)


            for (var i = 0; i < monthArray.length; i++) {
                const thisMonthInt = parseInt(monthArray[i].substring(5,7))
                const thisYear = monthArray[i].substring(0,4)

                const thisYearMonth = month_names_short[thisMonthInt] + '-' + thisYear

                if( currentMonth.length === 0  )
                {
                    currentMonth = thisYearMonth
                    continue
                }
                else
                {
                    if( currentMonth !== thisYearMonth  )  // change month
                    {
                        let oneMonthDataArray = []

                        lastMonth = monthArray[i-1]
                        currentMonth = thisYearMonth

                        // iter over device 
                        for (var j = 0; j < deviceArray.length; j++) {

                            let currentObj = {}

                            currentObj.device = deviceArray[j]
                            currentObj.value = history[ monthArray[i]+deviceArray[j] ]

                            // console.log(lastMonth)

                            let lastMonthValue = history[ lastMonth+deviceArray[j]  ]
                            currentObj.vary = ( (currentObj.value - lastMonthValue)/lastMonthValue  ).toPrecision(2).toString() + '%'
                            currentObj.month = thisYearMonth

                            oneMonthDataArray.push(currentObj)
                        }       
                        
                        resultList.push(oneMonthDataArray)
                    }

                    
                }
            }
            console.log(resultList)

            this.setState({
                chart_data: resultList
            })          
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }    

    render() {
        // console.log("rendering...");
        // console.log(this.state.chart_data)
        if( this.state.chart_data.length === 0 )
        {
            return null
        }

        const listItems = this.state.chart_data.map((item) =>
            <DemoPieChart key={item[0].month} chartData={item} title={item[0].month} />
        );
        
        return(
            <div>
                {listItems}               
            </div>
        )
    }
}

export default DisplayDeviceCategoryChart;

