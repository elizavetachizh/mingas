import './App.css';
import React, { Component } from 'react';
import Company from './pages/company';
import { Route, Routes } from "react-router-dom";
import NoMatch from './pages/noMatch';
import Home from './pages/Home';
import Сontacts from './pages/concats';
import PressCenter from './pages/PressCenter'
import ServiceCenter from './pages/serviceCenter'
import Services from './pages/services'

class App extends Component{
  render () {
    
    return (
      <div>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path="services" element={<Services></Services>}></Route>
         <Route path="company" element={<Company></Company>}></Route>
         <Route path="contacts" element={<Сontacts></Сontacts>}></Route>
         <Route path="Press-Center" element={<PressCenter></PressCenter>}></Route>
         <Route path="Service-Center" element={<ServiceCenter></ServiceCenter>}></Route>
         <Route path="*" element={<NoMatch></NoMatch>}></Route>
       </Routes>
      </div>
    );
  }
}

export default App;