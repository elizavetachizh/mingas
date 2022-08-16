import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/noMatch';
import Home from './pages/Home';
import PressCenter from './pages/PressCenter';
import Services from './pages/services';
import History from './pages/company/history';
import Management from './pages/company/managment';
import Career from './pages/company/career';
import Documentation from './pages/company/documentation';
import ProductionTechnicalManagement from './pages/company/managment/Subdivisions/departmentInformation';
import ServicesForLegalEntities from './pages/services/servicesForLegalEntities';
import Requisites from './pages/concats/requisites';
import SchedulePersonalReceptionOfCitizens from './pages/concats/WorkSchedule';
import PhoneLineServices from './pages/concats/DirectTelephoneLine';
import GeneralInform from './pages/concats/GeneralContactInform';
import Personal from './pages/PersonalAccount';
import Union from './pages/company/union';
import Tasks from './pages/Employees/Tasks';
import ReceptionOfCitizens from './pages/feedback/receptionOfCitizens';
import UsefulInformation from './pages/feedback/uaefulIndormation';
import Requests from './pages/feedback/Requests';
import QuestionAnswer from './pages/feedback/QuestionAnswer';
import Branches from './pages/company/Branches';
import DepartmentInformation from './pages/company/managment/Subdivisions/departmentInformation';
import NaturalGas from './pages/services/NaturalGas';
import './App.css';
import ResidentsOfCapitalRegion from './pages/ResidentsOfCapital Region';
import SearchPage from './pages/SearchPage';
import CardOfServive from './pages/services/servicesForLegalEntities/CardOfService';
import Gratitude from './pages/company/Gratitude';
import MethodPayment from './components/MethodPayment';
import NaturalGasTariff from './pages/tariff/naturalGasTariff';
import LiquefiedGasTariff from './pages/tariff/liquefiedGasTariff';
import ElectronicAppealForEntity from './pages/feedback/electronicCirculationForEntity';
import InformationAdministrativeService from './components/administrativeServices/InformaationAdministrativeService';
import AdministartiveServicesForLegal from './components/administartiveServicesForLegal';
import { Component } from 'react';
import ParentOrganizations from './pages/company/parentOrganizations';
import LeaveFeedback from './components/leaveFeedback';
import ElectronicAppeal from './pages/feedback/electronicСirculation';
import Information from './pages/feedback/QuestionAnswer/Information';
class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company/history" element={<History />} />
          <Route path="/contacts" element={<GeneralInform />} />
          <Route path="/press-center" element={<PressCenter />} />
          <Route path="/feedback/question-answer" element={<QuestionAnswer />} />
          <Route path="/feedback/question-answer/:titleId" element={<Information />} />
          <Route path={'/feedback/online-application'} element={<Requests />} />
          <Route path={'/feedback/electronic-appeal'} element={<ElectronicAppeal />} />
          <Route
            path={'/feedback/electronic-appeal-for-entity'}
            element={<ElectronicAppealForEntity />}
          />
          <Route path={'/feedback/usefull-information'} element={<UsefulInformation />} />
          <Route path={'/feedback/reception-of-citizens'} element={<ReceptionOfCitizens />} />
          <Route path="/*" element={<NoMatch />} />
          <Route path="/company/management" element={<Management />} />
          <Route path="/company/management/:linkId" element={<DepartmentInformation />} />
          <Route path="/services/:cardId" element={<NaturalGas />} />
          <Route path="/services/method-payment" element={<MethodPayment />} />
          <Route path="/company/career/" element={<Career />} />
          <Route path="/company/branches/:linkId" element={<Branches />} />
          <Route path={'/company/parent-organizations'} element={<ParentOrganizations />} />
          <Route path="/company/documentation/" element={<Documentation />} />
          <Route path={'company/gratitude'} element={<Gratitude />} />
          <Route path="/company/union/" element={<Union />} />
          <Route
            path="/company/management/production-technical-management"
            element={<ProductionTechnicalManagement />}
          />
          <Route path={'/services-legal-entities'} element={<ServicesForLegalEntities />} />
          <Route
            path={'/services-legal-entities/administrative-services-legal/'}
            element={<AdministartiveServicesForLegal />}
          />
          <Route path={'/services-legal-entities/:cardId'} element={<CardOfServive />} />
          <Route path={'/contacts/requisites'} element={<Requisites />} />
          <Route path={'/residents/price'} element={<ResidentsOfCapitalRegion />} />
          <Route
            path={'/contacts/work-schedule'}
            element={<SchedulePersonalReceptionOfCitizens />}
          />
          <Route path={'/contacts/phone-services'} element={<PhoneLineServices />} />
          <Route path={'/Personal'} element={<Personal />} />
          <Route path={'/Personal/tasks'} element={<Tasks />} />
          <Route path={'/SearchPage'} element={<SearchPage />} />
          <Route path={'/natural-gas-tariff'} element={<NaturalGasTariff />} />
          <Route path={'/liquefied-gas-tariff'} element={<LiquefiedGasTariff />} />
          <Route
            path={'/services/administrative-services/:serviceID'}
            element={<InformationAdministrativeService />}
          />
          <Route path={'/feedback/leave-feedback'} element={<LeaveFeedback />} />
        </Routes>
      </div>
    );
  }
}
export default App;
