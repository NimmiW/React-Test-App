import React, { Component } from 'react';
import logo from '../logo.svg';
import Avatar from '../Avatar/Avatar';
import HName from '../Helper/name';
import './Home.css';

class Home extends Component {
  render() {
    function fullname(fname,lname){
      return fname + ' ' + lname;
    }
    const pageUrl = 'src/Home/Home.js';
    const element = <h1>Hello, world</h1>;
    return (
      <div className="Home">
        <div className="Home-header">
          <Avatar gender='male' name="John" url ="http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757"/>
          <h2>Welcome to Home</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>{pageUrl}</code> and save to reload. 
        </p>
        <p>
          testing inline functions {fullname('nimmi','rashinika')}
        </p>
        <p>
          testing module.export functions {HName.fullname('nimmi','rashinika')}
        </p>

      </div>
    );
  }
}

export default Home;
