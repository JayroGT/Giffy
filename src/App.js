import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import {Link, Route} from "wouter";


function App() {
  return (
    <div className="App">
      <section className="App-header">  
        <h1>App</h1>
        
        <Link to="/gif/peru">Peru</Link>
        <Link to="/gif/comida">comida</Link>
        <Link to="/gif/autos">autos</Link>
        <Link to="/gif/aircraft">aviones</Link>
        <Route
        component={ListOfGifs}
        path="/gif/:keyword"   />
      </section>
    </div>
  );
}

export default App;
