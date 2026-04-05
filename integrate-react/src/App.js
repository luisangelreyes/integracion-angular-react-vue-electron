import React, { Component } from 'react';
import { Navbar, Button, Alignment, Classes } from '@blueprintjs/core';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Index() {
 return <h2>Este es el inicio de mi App holaaaaa🖖</h2>;
}
function Files() {
 return <h2>Aquí deberian haber documentos</h2>;
}

  function App  () {
  return (
    <Router>
    <div className="App">
      <Navbar className={Classes.DARK}>
  <Navbar.Group align={Alignment.LEFT}>
    <Navbar.Heading>Mi App electron</Navbar.Heading>
    <Navbar.Divider />

    <Button minimal={true} icon="home" >
       <Link to="/">Inicio</Link>
    </Button>
    
    <Button minimal={true} icon="document" >  
    <Link to="/files/">Documentos</Link> </Button>
  </Navbar.Group>
</Navbar>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src="https://www.universalorlando.com/webdata/k2/es/us/files/Images/gds/usf-simpsons-donut-illustration-b.png" className= "App-logo"alt="hola"/>.
 <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/files" element={<Files />} />
  </Routes>

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
    </Router>
  );
}

export default App;
