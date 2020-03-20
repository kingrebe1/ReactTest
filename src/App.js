import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ContactCard from './components/ContactCard'; 
import data from './data/employee.json'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="flexbox">
        {data.Employees.map(i => <ContactCard 
          firstName={i.firstName} 
          lastName={i.lastName}
          jobTitle={i.jobTitle}
          emailAddress={i.emailAddress}
          />)}
      </div>
    </div>
  );
}

export default App;
