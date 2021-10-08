import React, { Component } from "react";
import { withRouter } from "react-router";

class Products extends Component {
  goTOPRoductDetails = (product ) =>{
      this.props.history.push(`/products/${product}`);
  }

  render() {
    return (
      <div>
        <ul>
          <center>
            <li onClick={this.goTOPRoductDetails('macbook')}>Mac book</li>
            <li onClick={this.goTOPRoductDetails('ipad')}>ipad</li>
            <li onClick={this.goTOPRoductDetails('iphone')}>ipad</li>
          </center>
        </ul>
      </div>
    );
  }
}

export default withRouter (Products);