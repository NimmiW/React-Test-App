import React, { Component } from 'react';
import logo from '../logo.svg';
import './GenderDashBoard.css';

class GenderDashBoard extends Component {
  /*constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.edit.bind(this);
  }*/   // Can overwrite the constructor if need

  edit() {
    alert('edited...');
  }

  remove(){
    alert('removed...')
  }

  render() {

    if (this.props.gender == 'female'){
        return (
            <div>
                <h2 className = 'GenderDashBoard-female'>Female Dashboard</h2>
                <button >Editt</button>
                <button>Remove</button>
            </div>
        );
    }else if (this.props.gender == 'male'){
        return (
            <div>
                <h2 className = 'GenderDashBoard-male'>Male Dashboard</h2>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.remove}>Remove</button>
            </div>
        );
    }else{
        return (
            <div>
                <p>Sorry you are not selected the gender properly, you cannot proceed.</p>
            </div>
        );        
    }

  }

}

export default GenderDashBoard;