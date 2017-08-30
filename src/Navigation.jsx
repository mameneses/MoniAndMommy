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
      selectedTop:"0px",
      selectedLeft:"0px",
      selectedWidth:"",
    }
  }
  goToTab(index){
    let node = ReactDOM.findDOMNode(this.refs[index]).getBoundingClientRect()
    this.setState({
      selectedLeft:`${node.left}px`,
      selectedWidth:`${node.width}px`,
      selectedTop:`${node.top}px`
    })
  }
  render() {
    return (
      <div className="nav-container">
        <div className="selected" style={{top:this.state.selectedTop, left:this.state.selectedLeft, width:this.state.selectedWidth}}/>
        <div ref="0" className="nav-icon" onClick={this.goToTab.bind(this,0)}>
          <span className="nav-icon-text">mom<span className="amp">Y</span>moni</span>
        </div>
        <div className="tabs-container">
        {tabs.map((tab, i)=>{
          return(
            <Link to={`/${tab}`}>
              <div ref={i+1} className="tab" onClick={this.goToTab.bind(this,i+1)}>
                {tab}
              </div>
            </Link>
          )
        })}
        </div>
      </div>
    );
  }
}

export default Navigation;
