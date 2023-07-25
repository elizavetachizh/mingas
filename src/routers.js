import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Services from './pages/services';
import History from './pages/company/history';
import PressCenter from './pages/PressCenter';
import Information from './pages/feedback/QuestionAnswer/Information';
import Requests from './pages/feedback/Requests';
import ElectronicAppeal from './pages/feedback/electronicСirculation';
import NoMatch from './pages/noMatch';
import Management from './pages/company/managment';
import DepartmentInformation from './pages/company/managment/Subdivisions/departmentInformation';
import Subdivisions from './components/Subdivisions';
import AllSubdivisions from './pages/company/managment/Subdivisions/allSubdivisions';
import Corruption from './components/Сorruption';
import NaturalGas from './pages/services/NaturalGas';
import MethodPayment from './components/MethodPayment';
import Career from './pages/company/career';
import TBZ from './pages/company/Branches/TBZ';
import Bubni from './pages/company/Branches/Bubni';
import Ogonek from './pages/company/Branches/Ogonek';
import ParentOrganizations from './pages/company/parentOrganizations';
import Documentation from './pages/company/documentation';
import Gratitude from './pages/company/Gratitude';
import Union from './pages/company/union';
import ProductionTechnicalManagement from './pages/company/managment/Subdivisions/departmentInformation';
import ServicesForLegalEntities from './pages/services/servicesForLegalEntities';
import AdministartiveServicesForLegal from './components/administartiveServicesForLegal';
import CardOfServive from './pages/services/servicesForLegalEntities/CardOfService';
import Requisites from './pages/concats/requisites';
import ResidentsOfCapitalRegion from './components/Price';
import SchedulePersonalReceptionOfCitizens from './pages/concats/WorkSchedule';
import PhoneLineServices from './pages/concats/DirectTelephoneLine';
import SearchPage from './pages/SearchPage';
import InformationAdministrativeService from './components/administrativeServices/InformaationAdministrativeService';
import LeaveFeedback from './components/leaveFeedback';
import RegulatoryDocuments from './components/RegulatoryDocuments';
import RegulatoryDocumentsForLegal from './components/RegulatoryDocumentForLegal';
import Tenders from './components/tenders';
import ResidentsOfTheCapitalRegion from './components/ResidentsOfTheCapitalRegion';
import ForBusiness from './components/ForBusiness';
import Branches from './pages/company/Branches';
import Telemetria from './components/telemetria';
import Posts from './components/posts';
import GetAllPosts from './components/posts/getAllPosts';

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/company/history" element={<History />} />
      <Route path="/press-center/:descriptionID" element={<PressCenter />} />
      <Route path="/feedback/question-answer/:titleId" element={<Information />} />
      <Route path={'/feedback/online-application'} element={<Requests />} />
      <Route path={'/feedback/electronic-appeal'} element={<ElectronicAppeal />} />
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
        path={'/services/administrative-services'}
        element={<InformationAdministrativeService />}
      />
      <Route path={'/feedback/leave-feedback'} element={<LeaveFeedback />} />
      <Route path={'/regulatory-documents/:documentId'} element={<RegulatoryDocuments />} />
      <Route
        path={'/regulatory-documents-for-business/:documentId'}
        element={<RegulatoryDocumentsForLegal />}
      />
      <Route path={'/tenders'} element={<Tenders />} />
      <Route path={'/residents-of-the-capital-region'} element={<ResidentsOfTheCapitalRegion />} />
      <Route path={'/for-business'} element={<ForBusiness />} />
      <Route path={'/company/branches'} element={<Branches />} />
      <Route path={'/services-legal-entities/2/telemetria'} element={<Telemetria />} />
      <Route path={'/posts/:id'} element={<Posts />} />
      <Route path={'/posts/'} element={<GetAllPosts />} />
    </Routes>
  );
}
