import './App.css';
import React, { Component } from 'react';
import Company from './pages/company';
import { Route, Routes } from "react-router-dom";
import NoMatch from './pages/noMatch';

class App extends Component{
  render () {
    
    return (
      <div>
       <h1>Hellow world</h1>
       <Routes>
         <Route path="/" element={<Company></Company>}></Route>
         <Route path="*" element={<NoMatch></NoMatch>}></Route>
       </Routes>
      </div>
    );
  }
}

export default App;