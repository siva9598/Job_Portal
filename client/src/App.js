import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [testVar, setTestVar] = useState('')
  const fetchTestVar = async () => {
    const response = await fetch(`/testapi`)
    const t = await response.json()
    console.log(`t is ${t}`)
    const value = t.message
    setTestVar(value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {fetchTestVar()}
        <p>data: {testVar}</p>
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
