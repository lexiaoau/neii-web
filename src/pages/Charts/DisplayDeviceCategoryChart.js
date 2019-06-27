
import React, { Component } from 'react';

import fetchJsonp from 'fetch-jsonp';

import DemoPieChart from '../Charts/DemoPieChart';

const fakeArr = [{"device":"desktop","sessions":504,"reportmonth":"2019-01"},{"device":"mobile","sessions":113,"reportmonth":"2019-01"},{"device":"tablet","sessions":14,"reportmonth":"2019-01"},{"device":"desktop","sessions":714,"reportmonth":"2019-02"},{"device":"mobile","sessions":114,"reportmonth":"2019-02"},{"device":"tablet","sessions":36,"reportmonth":"2019-02"},{"device":"desktop","sessions":700,"reportmonth":"2019-03"},{"device":"mobile","sessions":96,"reportmonth":"2019-03"},{"device":"tablet","sessions":28,"reportmonth":"2019-03"},{"device":"desktop","sessions":562,"reportmonth":"2019-04"},{"device":"mobile","sessions":102,"reportmonth":"2019-04"},{"device":"tablet","sessions":41,"reportmonth":"2019-04"},{"device":"desktop","sessions":662,"reportmonth":"2019-05"},{"device":"mobile","sessions":68,"reportmonth":"2019-05"},{"device":"tablet","sessions":24,"reportmonth":"2019-05"}]

const fakeStateData = [
    [ {"device":"desktop","value":714,"vary":"2.77%","month":"Feb-2019"},
        {"device":"mobile","value":114,"vary":"-4.71%","month":"Feb-2019"},
        {"device":"tablet","value":36,"vary":"1.95%","month":"Feb-2019"}
    ],
    [  {"device":"desktop","value":700,"vary":"2.31%","month":"Mar-2019"},
        {"device":"mobile","value":96,"vary":"-1.54%","month":"Mar-2019"},
        {"device":"tablet","value":28,"vary":"-0.769%","month":"Mar-2019"}
    ],
    [  {"device":"desktop","value":562,"vary":"-5.24%","month":"Apr-2019"},
        {"device":"mobile","value":102,"vary":"2.82%","month":"Apr-2019"},
        {"device":"tablet","value":41,"vary":"2.42%","month":"Apr-2019"}],
    [  {"device":"desktop","value":662,"vary":"8.08%","month":"May-2019"},
        {"device":"mobile","value":68,"vary":"-5.45%","month":"May-2019"},
        {"device":"tablet","value":24,"vary":"-2.63%","month":"May-2019"}
    ]
]

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

        // const bar_url = 'http://nemsr-vd-01.bom.gov.au/cgi-bin/neii_analytics/get_neii_mobiledevices.py?startdate=20190101&enddate=20190531'
        
        // console.log('bar_url is ' + bar_url)

        // fetchJsonp(bar_url, 
        // {
        //     timeout: 3000,
        //     jsonpCallbackFunction: 'get_neii_mobiledevices'                
        // })
        // .then(function (response) {
        //     // console.log(response)
        //     return response.json()
        // }).then( (jsonData) => {
        //     console.log(jsonData)
        //     const arr = jsonData.sort( (a,b) => a.reportmonth.localeCompare(b.reportmonth) );
        //     // console.log(arr)

        //     const month_names_short = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


        //     let history = {};
        //     let lastMonth = '';
        //     let currentMonth = '';

        //     let monthObj = {}
        //     let deviceObj = {}
            
        //     let resultList = [];

        //     arr.map( item => {
        //         let monthStr = item.reportmonth.toString()
        //         let deviceStr = item.device.toString()

        //         monthObj[monthStr] = 1
        //         deviceObj[deviceStr] = 1
        //         history[monthStr+deviceStr] = item.sessions
        //         return item
        //     } )

        //     const monthArray = Object.keys(monthObj).sort()
        //     console.log(monthArray)
        //     const deviceArray = Object.keys(deviceObj)

        //     let eachMonthTotal = {}
        //     const arrSum = arr => arr.reduce((a,b) => a + b, 0)
        //     function getSameMonthElement(mon) {
        //         return function(element) {
        //             return element.reportmonth === mon;
        //         }
        //     }
        //     for( var i = 0; i < monthArray.length; i++)
        //     {
        //         const sameMonthData = arr.filter(getSameMonthElement( monthArray[i])  )
        //         const sessions = sameMonthData.map(a => a.sessions);
        //         const total = arrSum(sessions) 
        //         console.log(total)
        //         eachMonthTotal[monthArray[i]] = total
                
        //         const mon = monthArray[i]
        //         eachMonthTotal[mon] = arr.filter(e => e.reportmonth === mon ).map(a => a.sessions ).reduce( (a,b) => a + b, 0 )
        //     }
        //     console.log(eachMonthTotal)


        //     for (var i = 0; i < monthArray.length; i++) {
        //         const thisMonthInt = parseInt(monthArray[i].substring(5,7))
        //         const thisYear = monthArray[i].substring(0,4)

        //         const thisYearMonth = month_names_short[thisMonthInt] + '-' + thisYear

        //         if( currentMonth.length === 0  )
        //         {
        //             currentMonth = thisYearMonth
        //             continue
        //         }
        //         else
        //         {
        //             if( currentMonth !== thisYearMonth  )  // change month
        //             {
        //                 let oneMonthDataArray = []

        //                 lastMonth = monthArray[i-1]
        //                 currentMonth = thisYearMonth

        //                 // iter over device 
        //                 for (var j = 0; j < deviceArray.length; j++) {

        //                     let currentObj = {}

        //                     currentObj.device = deviceArray[j]
        //                     currentObj.value = history[ monthArray[i]+deviceArray[j] ]

        //                     const lastMonthValue = history[ lastMonth+deviceArray[j]  ]
        //                     const lastMonthRatio = (lastMonthValue / eachMonthTotal[lastMonth]).toPrecision(8)
        //                     const currentMonthRatio = (currentObj.value / eachMonthTotal[monthArray[i]]).toPrecision(8)
        //                     const diff = currentMonthRatio - lastMonthRatio 
        //                     currentObj.vary = (diff*100).toPrecision(3).toString() + '%' 
        //                     currentObj.month = thisYearMonth

        //                     oneMonthDataArray.push(currentObj)
        //                 }       
                        
        //                 resultList.push(oneMonthDataArray)
        //             }
        //         }
        //     }
        //     this.setState({
        //         chart_data: resultList
        //     })    
        //     console.log(this.state.chart_data)      
        //     console.log(JSON.stringify(this.state.chart_data))
        // }).catch(function (ex) {
        //     console.log('parsing failed', ex)
        // })



        this.setState({
            chart_data: fakeStateData
            // chart_data: resultList
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

