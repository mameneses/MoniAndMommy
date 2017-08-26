import React, { Component } from 'react';
import * as consts from './constants.js'
import {List} from 'immutable'
let products = List([0,1,2,3,4,5,6,7,8,9])
class Item extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.index +1}. KIND OF PRODUCT</h2>
        <p>
        This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing. This is body text. Information about products. Witty thing.
        </p>
      </div>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        {products.map((section,i)=>{
          return(
            <Item
              index={i}
            />

          )
        })}
        Home
      </div>
    );
  }
}

export default Home;
