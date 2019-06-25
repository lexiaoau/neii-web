import React from 'react';
// import PerformanceChart from './PerformanceChart';
// import Nasdaq from './Nasdaq';
// import DemoLineChart from './DemoLineChart';
import DisplayDeviceCategoryChart from './DisplayDeviceCategoryChart';
// import DisplayBarChart from './DisplayBarChart';
// import DisplayLineChart from './DisplayLineChart';
import { Route } from 'react-router-dom';
// import PublicPreference from './PublicPreference';
// import UserBehavior from './UserBehavior';

const Charts = ({match}) => ( 
  <div className="content">
    {/* <Route path={`${match.url}/daily-page-view`} component={DisplayLineChart} /> */}
    <Route path={`${match.url}/pie-chart`} component={DisplayDeviceCategoryChart} />    
    {/* <Route path={`${match.url}/datasrc-page-view`} component={DisplayBarChart} />     */}
  </div>
  // <div className="content">
  //   <div className="container-fluid">
  //     <div className="row">
  //        <div className="col-md-6">
  //         <PerformanceChart />
  //       </div>
  //       <div className="col-md-6">
  //         <Nasdaq />
  //       </div>
  //     </div>
  //     <div className="row">
  //       <div className="col-md-6">
  //         <PublicPreference />
  //       </div>
  //       <div className="col-md-6">
  //         <UserBehavior />
  //       </div>
  //       <div className="col-md-6">
  //         <DemoLineChart />
  //       </div>
  //     </div>
  //   </div>
  // </div>
);

export default Charts;
