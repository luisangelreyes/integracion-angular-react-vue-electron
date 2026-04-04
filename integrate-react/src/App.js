import React, { Component } from 'react';
import { Navbar, Button, Alignment, Classes } from '@blueprintjs/core';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import logo from './logo.svg';
import './App.css';

  function App  () {
  return (
    <div className="App">
      <Navbar className={Classes.DARK}>
  <Navbar.Group align={Alignment.LEFT}>
    <Navbar.Heading>Mi App electron</Navbar.Heading>
    <Navbar.Divider />
    <Button minimal={true} icon="home" text="Inicio" />
    <Button minimal={true} icon="document" text="Documentos" />
  </Navbar.Group>
</Navbar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>React Electron</h1>
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
        </a>
      </header>
    </div>
  );
}

export default App;
