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
import Union from './pages/company/union';
import Requests from './pages/feedback/Requests';
import DepartmentInformation from './pages/company/managment/Subdivisions/departmentInformation';
import NaturalGas from './pages/services/NaturalGas';
import './App.css';
import ResidentsOfCapitalRegion from './pages/ResidentsOfCapital Region';
import SearchPage from './pages/SearchPage';
import CardOfServive from './pages/services/servicesForLegalEntities/CardOfService';
import Gratitude from './pages/company/Gratitude';
import MethodPayment from './components/MethodPayment';
import ElectronicAppealForEntity from './pages/feedback/electronicCirculationForEntity';
import InformationAdministrativeService from './components/administrativeServices/InformaationAdministrativeService';
import AdministartiveServicesForLegal from './components/administartiveServicesForLegal';
import ParentOrganizations from './pages/company/parentOrganizations';
import LeaveFeedback from './components/leaveFeedback';
import ElectronicAppeal from './pages/feedback/electronicСirculation';
import Information from './pages/feedback/QuestionAnswer/Information';
import TBZ from './pages/company/Branches/TBZ';
import Bubni from './pages/company/Branches/Bubni';
import Ogonek from './pages/company/Branches/Ogonek';
import RegulatoryDocuments from './components/RegulatoryDocuments';
import RegulatoryDocumentsForLegal from './components/RegulatoryDocumentForLegal';
import Subdivisions from './components/Subdivisions';
import Tenders from './components/tenders';
import ResidentsOfTheCapitalRegion from './components/ResidentsOfTheCapitalRegion';
import ForBusiness from './components/ForBusiness';
import Branches from './pages/company/Branches';
import Corruption from './components/Сorruption';
import Telemetria from './components/telemetria';
import Posts from './components/posts';
import AllSubdivisions from './pages/company/managment/Subdivisions/allSubdivisions';
import CookieConsent from 'react-cookie-consent';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/company/history" element={<History />} />
        <Route path="/press-center/:descriptionID" element={<PressCenter />} />
        <Route path="/feedback/question-answer/:titleId" element={<Information />} />
        <Route path={'/feedback/online-application'} element={<Requests />} />
        <Route path={'/feedback/electronic-appeal'} element={<ElectronicAppeal />} />
        <Route
          path={'/feedback/electronic-appeal-for-entity'}
          element={<ElectronicAppealForEntity />}
        />
        <Route path="/*" element={<NoMatch />} />
        <Route path="/company/management" element={<Management />} />
        <Route path="/company/management/:linkId" element={<DepartmentInformation />} />
        <Route path="/company/management/division/:subdivisionId" element={<Subdivisions />} />
        <Route path="/company/management/all-departments" element={<AllSubdivisions />} />
        <Route path={'/company/corruption'} element={<Corruption />} />
        <Route path="/services/:cardId" element={<NaturalGas />} />
        <Route path="/services/method-payment" element={<MethodPayment />} />
        <Route path="/company/career" element={<Career />} />
        <Route path="/company/branches/TBZ" element={<TBZ />} />
        <Route path="/company/branches/Bubni" element={<Bubni />} />
        <Route path="/company/branches/ogonek" element={<Ogonek />} />
        <Route path={'/company/parent-organizations'} element={<ParentOrganizations />} />
        <Route path="/company/documentation" element={<Documentation />} />
        <Route path={'company/gratitude'} element={<Gratitude />} />
        <Route path="/company/union" element={<Union />} />
        <Route
          path="/company/management/production-technical-management"
          element={<ProductionTechnicalManagement />}
        />
        <Route path={'/services-legal-entities'} element={<ServicesForLegalEntities />} />
        <Route
          path={'/services-legal-entities/administrative-services-legal'}
          element={<AdministartiveServicesForLegal />}
        />
        <Route path={'/services-legal-entities/:cardId'} element={<CardOfServive />} />
        <Route path={'/contacts/requisites'} element={<Requisites />} />
        <Route path={'/residents/price'} element={<ResidentsOfCapitalRegion />} />
        <Route path={'/contacts/work-schedule'} element={<SchedulePersonalReceptionOfCitizens />} />
        <Route path={'/contacts/phone-services'} element={<PhoneLineServices />} />
        <Route path={'/SearchPage'} element={<SearchPage />} />
        <Route
          path={'/services/administrative-services/'}
          element={<InformationAdministrativeService />}
        />
        <Route path={'/feedback/leave-feedback'} element={<LeaveFeedback />} />
        <Route path={'/regulatory-documents/:documentId'} element={<RegulatoryDocuments />} />
        <Route
          path={'/regulatory-documents-for-business/:documentId'}
          element={<RegulatoryDocumentsForLegal />}
        />
        <Route path={'/tenders'} element={<Tenders />} />
        <Route
          path={'/residents-of-the-capital-region'}
          element={<ResidentsOfTheCapitalRegion />}
        />
        <Route path={'/for-business'} element={<ForBusiness />} />
        <Route path={'/company/branches'} element={<Branches />} />
        <Route path={'/services-legal-entities/2/telemetria'} element={<Telemetria />} />
        <Route path={'/posts'} element={<Posts />} />
      </Routes>
      <CookieConsent
        style={{
          backgroundColor: 'rgba(14,78,129,1)',
          width: '100%',
          margin: '0 auto',
          justifyContent: 'left',
        }}
        contentStyle={{ flex: 'none', maxWidth: '1100px', width: '100%' }}
        buttonStyle={{ background: '#fff', padding: '10px 30px', margin: '20px' }}
        buttonText={'Ок'}
        debug={true}
      >
        Этот сайт использует файлы cookies для более комфортной работы пользователя. Продолжая
        просмотр страниц сайта, вы соглашаетесь с использованием файлов cookies
      </CookieConsent>
    </div>
  );
}
