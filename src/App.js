import React from 'react'
import { Link, BrowserRouter as Router } from "react-router-dom";
import Rutas from './ruteo/Rutas'
import BarraNavegacion from './ruteo/BarraNavegacion';

//Par que funcione $ npm install react-router-dom

const App = () => {
  return (
    <div style={{ background:"violet" }}>
      <h1>App.js</h1>
      <Router>
        <BarraNavegacion/>
        <Rutas/>
        
      </Router>
    </div>
  )
}

export default App;
