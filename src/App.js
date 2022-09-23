import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
           CC task 2 - simple web app using heroku
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener norefferer">Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
