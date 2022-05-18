import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/noMatch';
import Home from './pages/Home';
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
import Requisites from './pages/concats/requisites';
import SchedulePersonalReceptionOfCitizens from './pages/concats/WorkSchedule';
import PhoneLineServices from './pages/concats/DirectTelephoneLine';
import GeneralInform from './pages/concats/GeneralContactInform';
import { DialogViber, DialogTelegram } from './pages/company/styles';
import Personal from './pages/PersonalAccount';
import Union from './pages/company/union';
import Tasks from './pages/Employees/Tasks';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/company/history" element={<History />} />
          <Route path="/contacts" element={<GeneralInform />} />
          <Route path="/Press-Center" element={<PressCenter />} />
          <Route path="/Service-Center" element={<ServiceCenter />} />
          <Route path="/*" element={<NoMatch />} />
          <Route path="/company/management" element={<Management />} />
          <Route path="/company/structure/" element={<Structure />} />
          <Route path="/company/career/" element={<Career />} />
          <Route path="/company/documentation/" element={<Documentation />} />
          <Route path="/company/union/" element={<Union />} />
          <Route
            path="/company/management/production-technical-management"
            element={<ProductionTechnicalManagement />}
          />
          <Route path={'/services/legal-entities'} element={<ServicesForLegalEntities />} />
          <Route path={'/contacts/requisites'} element={<Requisites />} />
          <Route
            path={'/contacts/work-schedule'}
            element={<SchedulePersonalReceptionOfCitizens />}
          />
          <Route path={'/contacts/phone-services'} element={<PhoneLineServices />} />
          <Route path={'/dialog/:telegram'} element={<DialogViber />} />
          <Route path={'/dialog/:viber'} element={<DialogTelegram />} />
          <Route path={'/Personal'} element={<Personal />} />
          <Route path={'/Personal/tasks'} element={<Tasks />} />
        </Routes>
      </div>
    );
  }
}

export default App;
