import React, { Component } from 'react';
import * as consts from './constants.js'
import {List} from 'immutable'
let products = List([0,1,2,3,4,5,6,7,8,9])
class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <h3><span className="number">{this.props.index +1}</span> KIND OF PRODUCT</h3>
        <div>
          <div className="list-image-container">
            <img src="http://www.growingyourbaby.com/wp-content/uploads/2009/09/Orbit-Baby-G2-Stroller-Ruby-Red.jpg"/>
          </div>
          <div className="list-text-container">
            <p>
              This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        <h1> 10 Things every mommy needs </h1>
        {products.map((section,i)=>{
          return(
            <Item
              index={i}
            />
          )
        })}
      </div>
    );
  }
}

export default Home;
