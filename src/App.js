import React from 'react';
import './App.css';
import {Link, Route} from "wouter";
import Detail from './pages/Detail';
import Home from './pages/Home';
import searchResults from './pages/SearchResults';


export default function App() {
  return (
    <div className="App">
      <section className="App-header">          
        <Link to="/">
           <img className="App-logo" alt="logoPag" src ='/hard.png' />
        </Link>
        <Route 
          component={Home} 
          path="/" />
        <Route 
          component={Detail} 
          path="/gif/:id" />
        <Route
          component={searchResults}
          path="/search/:keyword"   />
      </section>
    </div>
  );
}

