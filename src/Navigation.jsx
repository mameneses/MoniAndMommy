import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './styles/Navigation.css';
import {List} from 'immutable'
import * as consts from './constants.js'
import {Link} from 'react-router-dom'
const tabs = List([
  consts.strollers,
  consts.infant_seats,
  consts.carriers,
  consts.high_chairs,
])

class Navigation extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedTop:"0px"
    }
  }
  goToTab(index){
    this.setState({
      selectedTop:`${(index + 1) * 70}px`
    })
  }
  render() {
    return (
      <div className="tabs-container">
        <div className="selected" style={{top:this.state.selectedTop}}/>
        <div className="nav-icon">
          MONI<span className="amp">&</span>MOMMY
        </div>
        {tabs.map((tab, i)=>{
          return(
            <Link to={`/${tab}`}>
              <div ref={i} className="tab" onClick={this.goToTab.bind(this,i)}>
                    {tab}
              </div>
            </Link>
          )
        })}
      </div>
    );
  }
}

export default Navigation;
