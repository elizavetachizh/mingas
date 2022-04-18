import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/noMatch';
import Home from './pages/Home';
import Сontacts from './pages/concats';
import PressCenter from './pages/PressCenter';
import ServiceCenter from './pages/serviceCenter';
import Services from './pages/services';
import History from './pages/company/history';
import Management from './pages/company/managment';
import Structure from './pages/company/structure';
import Career from './pages/company/career';
import Documentation from './pages/company/documentation';
import ProductionTechnicalManagement from './pages/company/managment/Subdivisions/ProductionTechnicalManagement';
import ServicesForLegalEntities from './pages/services/servicesForLegalEntities';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/company/history" element={<History></History>}></Route>
          <Route path="/contacts" element={<Сontacts></Сontacts>}></Route>
          <Route path="/Press-Center" element={<PressCenter></PressCenter>}></Route>
          <Route path="/Service-Center" element={<ServiceCenter></ServiceCenter>}></Route>
          <Route path="/*" element={<NoMatch></NoMatch>}></Route>
          <Route path="/company/management/" element={<Management></Management>}></Route>
          <Route path="/company/structure/" element={<Structure></Structure>}></Route>
          <Route path="/company/career/" element={<Career></Career>}></Route>
          <Route path="/company/documentation/" element={<Documentation></Documentation>}></Route>
          <Route
            path="/company/management/ProductionTechnicalManagement"
            element={<ProductionTechnicalManagement></ProductionTechnicalManagement>}
          ></Route>
          <Route
            path={'/services/legal-entities'}
            element={<ServicesForLegalEntities></ServicesForLegalEntities>}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
