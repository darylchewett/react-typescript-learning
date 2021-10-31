import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Button from './components/Button';


function App() {
  return (
    <div className="App">
      <Header />
      <Button buttonText="HELLO WORLD" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
