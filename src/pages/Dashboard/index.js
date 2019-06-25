import React from 'react';
// import EmailChart from './EmailChart';
// import SalesChart from './SalesChart';
// import UserBehaviorChart from './UserBehaviorChart';
// import Tasks from './Tasks';
import DisplayBarChart from './DisplayBarChart';
import DisplayLineChart from './DisplayLineChart';

import '../../assets/styles/css/base.css'

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div>
          <DisplayLineChart />
        </div>        
        <div className="chartDiv">
          <DisplayBarChart />
        </div>
        {/* <div className="col-md-8">
        <p>item 2</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <p>item 3</p>
        </div>
        <div className="col-md-6">
        <p>item 4</p>
        </div> */}
      </div>

    </div>
  </div>
);

export default Dashboard;
