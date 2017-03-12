import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Home from './Home/Home';
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <Home/>
  </div>,
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('dateTime')
  );
}

setInterval(tick, 1000);