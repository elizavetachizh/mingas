import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoMatch from './pages/noMatch';
import Home from './pages/Home';
import PressCenter from './pages/PressCenter';
import Services from './pages/services';
import History from './pages/company/history';
import Management from './pages/company/managment';
import Structure from './pages/company/structure';
import Career from './pages/company/career';
import Documentation from './pages/company/documentation';
import ProductionTechnicalManagement from './pages/company/managment/Subdivisions/departmentInformation';
import ServicesForLegalEntities from './pages/services/servicesForLegalEntities';
import Requisites from './pages/concats/requisites';
import SchedulePersonalReceptionOfCitizens from './pages/concats/WorkSchedule';
import PhoneLineServices from './pages/concats/DirectTelephoneLine';
import GeneralInform from './pages/concats/GeneralContactInform';
import { DialogViber, DialogTelegram } from './pages/company/styles';
import Personal from './pages/PersonalAccount';
import Union from './pages/company/union';
import Tasks from './pages/Employees/Tasks';
import ReceptionOfCitizens from './pages/feedback/receptionOfCitizens';
import UsefulInformation from './pages/feedback/uaefulIndormation';
import ElectronicAppeal from './pages/feedback/electronicСirculation';
import Requests from './pages/feedback/Requests';
import QuestionAnswer from './pages/feedback/QuestionAnswer';
import Branches from './pages/company/Branches';
import DepartmentInformation from './pages/company/managment/Subdivisions/departmentInformation';
import NaturalGas from './pages/services/NaturalGas';
import './App.css';
function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/', { mode: 'cors' });
      const data = await response.json();
      console.log({ data });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company/history" element={<History />} />
        <Route path="/contacts" element={<GeneralInform />} />
        <Route path="/press-center" element={<PressCenter />} />
        {/*<Route path="/Service-Center" element={<ServiceCenter />} />*/}
        <Route path="/feedback/question-answer" element={<QuestionAnswer />} />
        <Route path={'/feedback/online-application'} element={<Requests />} />
        <Route path={'/feedback/electronic-appeal'} element={<ElectronicAppeal />} />
        <Route path={'/feedback/usefull-information'} element={<UsefulInformation />} />
        <Route path={'/feedback/reception-of-citizens'} element={<ReceptionOfCitizens />} />
        <Route path="/*" element={<NoMatch />} />
        <Route path="/company/management" element={<Management />} />
        <Route path="/company/management/:linkId" element={<DepartmentInformation />} />
        <Route path="/services/:nameCard" element={<NaturalGas />} />
        <Route path="/company/structure/" element={<Structure />} />
        <Route path="/company/career/" element={<Career />} />
        <Route path="/company/branches" element={<Branches />} />
        <Route path="/company/documentation/" element={<Documentation />} />
        <Route path="/company/union/" element={<Union />} />
        <Route
          path="/company/management/production-technical-management"
          element={<ProductionTechnicalManagement />}
        />
        <Route path={'/services/legal-entities'} element={<ServicesForLegalEntities />} />
        <Route path={'/contacts/requisites'} element={<Requisites />} />
        <Route path={'/contacts/work-schedule'} element={<SchedulePersonalReceptionOfCitizens />} />
        <Route path={'/contacts/phone-services'} element={<PhoneLineServices />} />
        <Route path={'/dialog/:telegram'} element={<DialogViber />} />
        <Route path={'/dialog/:viber'} element={<DialogTelegram />} />
        <Route path={'/Personal'} element={<Personal />} />
        <Route path={'/Personal/tasks'} element={<Tasks />} />
      </Routes>

        <link rel="stylesheet" href="../../src/web_chat/static/css/main.bbd16e91.css" />
        <link rel="icon" type="image/x-icon" href="./web_chat/static/media/logo.fe536c0e.png" />
        <div id="webChat"></div>
        <span id="chatLanguage" data-language="ru"></span>
        <span id="chatFontSize" data-size="medium"></span>
        <span id="open_webchat" data-open="false"></span>

        <script src="./web_chat/web_chat/config.js"></script>
        <script type="text/javascript" src="./web_chat/static/js/main.28df611b.js"></script></div>

  );
}
export default App;

//
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/company/history" element={<History />} />
//           <Route path="/contacts" element={<GeneralInform />} />
//           <Route path="/press-center" element={<PressCenter />} />
//           {/*<Route path="/Service-Center" element={<ServiceCenter />} />*/}
//           <Route path="/feedback/question-answer" element={<QuestionAnswer />} />
//           <Route path={'/feedback/online-application'} element={<Requests />} />
//           <Route path={'/feedback/electronic-appeal'} element={<ElectronicAppeal />} />
//           <Route path={'/feedback/usefull-information'} element={<UsefulInformation />} />
//           <Route path={'/feedback/reception-of-citizens'} element={<ReceptionOfCitizens />} />
//           <Route path="/*" element={<NoMatch />} />
//           <Route path="/company/management" element={<Management />} />
//           <Route path="/company/management/:linkId" element={<DepartmentInformation />} />
//           <Route path="/services/:nameCard" element={<NaturalGas />} />
//           <Route path="/company/structure/" element={<Structure />} />
//           <Route path="/company/career/" element={<Career />} />
//           <Route path="/company/branches" element={<Branches />} />
//           <Route path="/company/documentation/" element={<Documentation />} />
//           <Route path="/company/union/" element={<Union />} />
//           <Route
//             path="/company/management/production-technical-management"
//             element={<ProductionTechnicalManagement />}
//           />
//           <Route path={'/services/legal-entities'} element={<ServicesForLegalEntities />} />
//           <Route path={'/contacts/requisites'} element={<Requisites />} />
//           <Route
//             path={'/contacts/work-schedule'}
//             element={<SchedulePersonalReceptionOfCitizens />}
//           />
//           <Route path={'/contacts/phone-services'} element={<PhoneLineServices />} />
//           <Route path={'/dialog/:telegram'} element={<DialogViber />} />
//           <Route path={'/dialog/:viber'} element={<DialogTelegram />} />
//           <Route path={'/Personal'} element={<Personal />} />
//           <Route path={'/Personal/tasks'} element={<Tasks />} />
//           <Route path={'/test'} element={<Test/>}/>
//         </Routes>
//         <link rel="stylesheet" href="../src/web_chat/web_chat/static/css/main.bbd16e91.css" />
//         <link rel="icon" type="image/x-icon" href="../src/web_chat/static/media/logo.fe536c0e.png" />
//         <div id="webChat"></div>
//         <span id="chatLanguage" data-language="ru"></span>
//         <span id="chatFontSize" data-size="medium"></span>
//         <span id="open_webchat" data-open="false"></span>а
//
//         <script src="../src/web_chat/web_chat/config.js"></script>
//         <script type="text/javascript" src="../src/web_chat/web_chat/static/js/main.28df611b.js"></script>
//       </div>
//     );
//   }
// }
//
// export default App;
