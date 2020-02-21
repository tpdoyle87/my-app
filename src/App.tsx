import React from 'react';
import logo from './logo.svg';
import './App.css';
import Description from './Description';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Description />
      </header>
    </div>
  );
}

export default App;
