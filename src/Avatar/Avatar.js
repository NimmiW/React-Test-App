import React, { Component } from 'react';
import logo from '../logo.svg';
import GenderDashBoard from '../GenderDashBoard/GenderDashBoard';
import './Avatar.css';

class Avatar extends Component {
  render() {
    return (
        <div>
          <img className="Avatar-round" 
              src={this.props.url}
              alt="avatar" />
          <h1>{this.props.name}</h1>
          <GenderDashBoard gender={this.props.gender}/>
        </div>
    );
  }
}

export default Avatar;