import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import Arrow from './Arrow'

class CollapseMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { isMenuOpen: false };

        this.handleClick = this.handleClick.bind(this);     //////
    }

    handleClick() {
        this.setState(state => ({
            isMenuOpen: !state.isMenuOpen
        })); 
    }

    render() {
        // handleClick
        const { iconType, iconText, menuText } = this.props;
        return (
            <li>
                {/* eslint-disable-next-line  */}
                <a onClick={this.handleClick} >
                    <i className={iconType}>{iconText}</i>
                    <p>{menuText}<Arrow arrowStyle={this.state.isMenuOpen ? "arrowUp" : "arrowDown"} /></p>
                </a>
                <Collapse in={this.state.isMenuOpen}>
                    <div>
                        <ul className="nav">
                            {this.props.children}
                        </ul>
                    </div>
                </Collapse>
            </li>
        );
    }
}

export default CollapseMenu;

/*
<li className={this.isPathActive('/charts') ? 'active' : null}>
          <a onClick={this.handleChartMenuChange} data-toggle="collapse" >
            <i className="material-icons md-18">bar_chart</i>
            
            <p>Charts<b className="caret"></b></p>
          </a>
          <Collapse in={this.state.chartMenuOpen}> 
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/charts/daily-page-view') ? 'active' : null}>
                  <Link to="/charts/daily-page-view">Daily Page View</Link>
                </li>
                <li className={this.isPathActive('/charts/pie-chart') ? 'active' : null}>
                  <Link to="/charts/pie-chart">Pie Chart</Link>
                </li> */
