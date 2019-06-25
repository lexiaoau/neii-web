import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Collapse } from 'react-bootstrap';
import SubMenuItem from './SubMenuItem'
import CollapseMenu from './CollapseMenu'



class Nav extends Component {
  constructor() {
    super()  
    
    this.state = {
      chartMenuOpen: false
    }
    this.handleChartMenuChange=this.handleChartMenuChange.bind(this);
  }

  handleChartMenuChange() {
    this.setState({ chartMenuOpen: !this.state.chartMenuOpen })

  }

  // state = {};//sdfa

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/"> 
            <i className="material-icons md-18">dashboard</i>
            <p>Dashboard</p>
          </Link>
        </li>
        {/* <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="material-icons md-18">bar_chart</i>
            <p>Charts</p>
          </Link>
        </li> */}
        {/* <li className={this.isPathActive('/charts') ? 'active' : null}> */}
          {/* eslint-disable-next-line  */}
          {/* <a onClick={this.handleChartMenuChange} data-toggle="collapse" >
            <i className="material-icons md-18">bar_chart</i> */}
            {/* <p>Charts<b className="arrowdown"></b></p> */}
            {/* <p>Charts<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.chartMenuOpen}> 
            <div>  
              <ul className="nav">
                <li className={this.isPathActive('/charts/daily-page-view') ? 'active' : null}>
                  <Link to="/charts/daily-page-view">Daily Page Viewup</Link>                  
                </li>
                <li className={this.isPathActive('/charts/pie-chart') ? 'active' : null}>
                  <Link to="/charts/pie-chart">Pie Chart</Link>                   
                </li>  
                <li className={this.isPathActive('/charts/datasrc-page-view') ? 'active' : null}>
                  <Link to="/charts/datasrc-page-view">Data Source View</Link>
                </li> */}
                {/* <SubMenuItem linkTarget="/charts/datasrc-page-view" displayText="Menu Item" /> */}
                {/* <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li> */}
              {/* </ul>
            </div>
          </Collapse>
        </li> */}
        <CollapseMenu iconType="material-icons md-18" iconText="bar_chart" menuText="New Chart" >
            {/* <SubMenuItem  linkTarget="/charts/daily-page-view" displayText="Daily Page Viewup"  /> */}
            <SubMenuItem  linkTarget="/charts/pie-chart" displayText="Device Category"  />
            {/* <SubMenuItem  linkTarget="/charts/datasrc-page-view" displayText="Data Source View"  /> */}
        </CollapseMenu>
 
      </ul>
    );
  }

  isPathActive(path) {
    // console.log("isPathActive")
    // console.log(path)
    // console.log(this.props.location.pathname.startsWith(path))
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
