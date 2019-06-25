
import React, { Component } from 'react';

import fetchJsonp from 'fetch-jsonp';

//import axios from 'axios';
//import fetchJsonp from './fetch-jsonp'
//import fetchJsonpSim from './jsonp'
//import request from 'request'


import DemoLineChart from '../Charts/DemoLineChart';

// const fakeLineChartData = [ {"ga_date": "20190401", "sumUni": 59.0},
//   {"ga_date": "20190402", "sumUni": 36.0},
//   {"ga_date": "20190403", "sumUni": 58.0},
//   {"ga_date": "20190404", "sumUni": 63.0},
//   {"ga_date": "20190405", "sumUni": 33.0},
//   {"ga_date": "20190406", "sumUni": 21.0},
//   {"ga_date": "20190407", "sumUni": 17.0},
//   {"ga_date": "20190408", "sumUni": 67.0},
//   {"ga_date": "20190409", "sumUni": 34.0},
//   {"ga_date": "20190410", "sumUni": 40.0},
//   {"ga_date": "20190411", "sumUni": 30.0},
//   {"ga_date": "20190412", "sumUni": 45.0},
//   {"ga_date": "20190413", "sumUni": 13.0},
//   {"ga_date": "20190414", "sumUni": 14.0},
//   {"ga_date": "20190415", "sumUni": 40.0},
//   {"ga_date": "20190416", "sumUni": 55.0},
//   {"ga_date": "20190417", "sumUni": 45.0},
//   {"ga_date": "20190418", "sumUni": 59.0},
//   {"ga_date": "20190419", "sumUni": 13.0},
//   {"ga_date": "20190420", "sumUni": 10.0},
//   {"ga_date": "20190421", "sumUni": 10.0},
//   {"ga_date": "20190422", "sumUni": 13.0},
//   {"ga_date": "20190423", "sumUni": 29.0},
//   {"ga_date": "20190424", "sumUni": 25.0},
//   {"ga_date": "20190425", "sumUni": 32.0},
//   {"ga_date": "20190426", "sumUni": 45.0},
//   {"ga_date": "20190427", "sumUni": 6.0},
//   {"ga_date": "20190428", "sumUni": 5.0},
//   {"ga_date": "20190429", "sumUni": 68.0},
//   {"ga_date": "20190430", "sumUni": 61.0} ];  

class DisplayLineChart extends Component {
    constructor() {
        super()  
        
        this.state = {                // set class state
            chart_data: []
        }        
    }  

    componentDidMount() {
        
        // console.log(process.env.NODE_ENV)
        // console.log(process.env.REACT_APP_DATA_SRC)

        const api_url = 'http://nemsr-vd-01.bom.gov.au/cgi-bin/neii_analytics/get_neii_pageviews.py?startdate=20190401&enddate=20190430'
        // const api_url = '/cgi-bin/neii_analytics/get_neii_pageviews.py?startdate=20190401&enddate=20190430'
        // const api_url = 'http://localhost:8000/page/data/'

        console.log('api_url is ' + api_url)

        // fetch('http://localhost:8000/page/daily-page-views/?startdate=20190401&enddate=20190430')
        // fetch('http://nemsr-vd-01.bom.gov.au/cgi-bin/neii_analytics/get_neii_pageviews.py?startdate=20190401&enddate=20190430')
        // fetch(api_url)
        //     .then(function(response) {
        //         if (!response.ok) {
        //         console.log(response.status)
        //         // console.log(response.statusText)
        //         }
        //         if(response.status !== 200) {
        //             console.log(response)
        //             console.log('above is response')
        //             throw Error(response.statusText); 
        //         }
        //         return response;
        //     })
        //     .then(response => response.json())
        //     .then((data) => {
        //             console.log(typeof(data))
        //             let jsonData = JSON.parse(data)
        //             console.log(data)
        //             this.setState({
        //                 chart_data: jsonData
        //             })                    
        //         }
        //     )
        //     .catch(error =>{ 
        //         this.setState({
        //             chart_data: fakeLineChartData
        //         })    
        //         console.log('use fake data')
        //         // console.log(this.state.chart_data)
        //         console.log(error)
        //     } );            

            // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
            // axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'nemsr-vd-01.bom.gov.au';
            // axios.get(api_url)
            // axios(api_url, {
            //     method: 'GET',
            //     mode: 'no-cors',
            //     headers: {
            //       'Access-Control-Allow-Origin': '*',
            //       'Content-Type': 'application/json',
            //       'Upgrade-Insecure-Requests': 1,
            //     //   'Upgrade-Insecure-Requests': 1,
            //     //   'Upgrade-Insecure-Requests': 1,
            //     },
            //   })
            // // axios.get(api_url)
            // .then(function (response) {
            //   console.log(response);
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });

            // fetchJsonpSim(api_url,{method: 'encode'},{jsonp: 'callback', callback: 'render'})
            // .then( function(res) { 
            //     console.log('---------------------------')
            //     console.log(res)
            // })


            // console.log( '----------------------------------------');

            // fetchJsonp(api_url, {
            //     jsonpCallback: this.localJsonpCallback,
            //   } )
            // .then(function(response) {
            //     return response.json()
            // }).then(function(json) { 
            //     console.log('parsed json', json)
            // }).catch(function(ex) {
            //     // console.log(response)
            //     console.log('parsing failed', ex)
                
            // })

            // console.log( '----------------------------------------');


            // this.getWebData()

            // request
            // .get(api_url, {
            //     mode: "no-cors"
            // })
            // .on('response', function(response) {
            //     console.log(response.statusCode) // 200
            //     console.log(response.headers['content-type']) // 'image/png'
            //     console.log(response) // 'image/png'
            // })
            // .pipe(request.put('http://mysite.com/img.png'))

            //--------------------------------------------------
            // payload is your post data
            // const payload = {data: 'test'};
            // const options = {
            //     method: 'GET',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     // body: JSON.stringify(payload),
            //     cors: true, // allow cross-origin HTTP request
            //     credentials: 'same-origin' // This is similar to XHR’s withCredentials flag
            // };
 
            // SEND REQUEST
            // fetch(api_url, options).then((response) => {
            //     console.log("2nd fetch good")
            //     console.log(response)
            // }).catch((error) => {
            // // TODO
            //     console.log("2nd fetch error")
            // });

            //-----------------------------------------------------

            fetchJsonp(api_url, 
            {
                timeout: 3000,
                jsonpCallbackFunction: 'get_neii_pageviews'                
            })
            .then(function (response) {
                // console.log(response)
                return response.json()
            }).then( (jsonData) => {
                this.setState({
                    chart_data: jsonData
                })    
                // console.log( this.state.chart_data )           
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }


    

    render() {
        console.log("rendering...");
        console.log(this.state.chart_data)
        return(
            <div>
                {
                    this.state.chart_data.length > 0 && <DemoLineChart chartData={this.state.chart_data} />
                }               
            </div>
        )
    }

}

export default DisplayLineChart;

