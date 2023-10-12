import React from 'react';
import Home from '../pages/Home';
import ContainerCookies from '../components/ContainerCokies';
import Services from '../pages/services';
import History from '../pages/company/history';
import PressCenter from '../pages/PressCenter';
import Information from '../pages/feedback/QuestionAnswer/Information';
import Requests from '../pages/feedback/Requests';
import ElectronicAppeal from '../pages/feedback/electronicСirculation';
import NoMatch from '../pages/noMatch';
import Management from '../pages/company/managment';
import Subdivisions from '../components/Subdivisions';
import AllSubdivisions from '../pages/company/managment/Subdivisions/allSubdivisions';
import Corruption from '../components/Сorruption';
import Career from '../pages/company/career';
import TBZ from '../pages/company/Branches/TBZ';
import Bubni from '../pages/company/Branches/Bubni';
import Ogonek from '../pages/company/Branches/Ogonek';
import ParentOrganizations from '../pages/company/parentOrganizations';
import Documentation from '../pages/company/documentation';
import Gratitude from '../pages/company/Gratitude';
import Union from '../pages/company/union';
import ServicesForLegalEntities from '../pages/services/servicesForLegalEntities';
import AdministartiveServicesForLegal from '../components/administartiveServicesForLegal';
import Requisites from '../pages/concats/requisites';
import ResidentsOfCapitalRegion from '../components/Price';
import SchedulePersonalReceptionOfCitizens from '../pages/concats/WorkSchedule';
import PhoneLineServices from '../pages/concats/DirectTelephoneLine';
import InformationAdministrativeService from '../components/administrativeServices/InformaationAdministrativeService';
import LeaveFeedback from '../components/leaveFeedback';
import Tenders from '../components/tenders';
import DepartmentInformation from '../pages/company/managment/Subdivisions/departmentInformation';
import ServicesComponent from '../components/ServicesComponent';
import RegulatoryDocumentComponent from '../components/RegulatoryDocumentComponent';
import ResidentsOfTheCapitalRegion from '../components/ResidentsOfTheCapitalRegion';
import ForBusiness from '../components/ForBusiness';
import Branches from '../pages/company/Branches';
import Telemetria from '../components/telemetria';
import Posts from '../components/posts';
import GetAllPosts from '../components/posts/getAllPosts';

export const routers = [
  { path: '/', element: <Home /> },
  { path: '/politika-cookie', element: <ContainerCookies /> },
  { path: '/services', element: <Services /> },
  { path: '/company/history', element: <History /> },
  { path: '/press-center/:descriptionID', element: <PressCenter /> },
  { path: '/feedback/question-answer/:titleId', element: <Information /> },
  { path: '/feedback/online-application', element: <Requests /> },
  { path: '/feedback/electronic-appeal', element: <ElectronicAppeal /> },
  { path: '/*', element: <NoMatch /> },
  { path: '/company/management', element: <Management /> },
  { path: '/company/management/:linkId', element: <DepartmentInformation /> },
  { path: '/company/management/division/:subdivisionId', element: <Subdivisions /> },
  { path: '/company/management/all-departments', element: <AllSubdivisions /> },
  { path: '/company/corruption', element: <Corruption /> },
  {
    path: '/services/:cardId',
    element: (
      <ServicesComponent type={'1'} router={'services'} titleName={'Услуги для физических лиц'} />
    ),
  },
  { path: '/company/career', element: <Career /> },
  { path: '/company/branches/TBZ', element: <TBZ /> },
  { path: '/company/branches/Bubni', element: <Bubni /> },
  { path: '/company/branches/ogonek', element: <Ogonek /> },
  { path: '/company/parent-organizations', element: <ParentOrganizations /> },
  { path: '/company/documentation', element: <Documentation /> },
  { path: '/company/gratitude', element: <Gratitude /> },
  { path: '/company/union', element: <Union /> },
  { path: '/services-legal-entities', element: <ServicesForLegalEntities /> },
  {
    path: '/services-legal-entities/administrative-services-legal',
    element: <AdministartiveServicesForLegal />,
  },
  {
    path: '/services-legal-entities/:cardId',
    element: (
      <ServicesComponent
        type={'2'}
        router={'services-legal-entities'}
        titleName={'Услуги для юридических лиц'}
      />
    ),
  },
  { path: '/contacts/requisites', element: <Requisites /> },
  { path: '/residents/price', element: <ResidentsOfCapitalRegion /> },
  { path: '/contacts/work-schedule', element: <SchedulePersonalReceptionOfCitizens /> },
  { path: '/contacts/phone-services', element: <PhoneLineServices /> },
  { path: '/services/administrative-services', element: <InformationAdministrativeService /> },
  { path: '/feedback/leave-feedback', element: <LeaveFeedback /> },
  {
    path: '/regulatory-documents/:documentId',
    element: (
      <RegulatoryDocumentComponent
        type={'1'}
        router={'regulatory-documents'}
        title={'Регламентирующие документы'}
      />
    ),
  },
  {
    path: '/regulatory-documents-for-business/:documentId',
    element: (
      <RegulatoryDocumentComponent
        type={'2'}
        router={'regulatory-documents-for-business'}
        title={'Регламентирующие документы для юридических лиц'}
      />
    ),
  },
  { path: '/tenders', element: <Tenders /> },
  { path: '/residents-of-the-capital-region', element: <ResidentsOfTheCapitalRegion /> },
  { path: '/for-business', element: <ForBusiness /> },
  { path: '/company/branches', element: <Branches /> },
  { path: '/services-legal-entities/2/telemetria', element: <Telemetria /> },
  { path: '/posts/:id', element: <Posts /> },
  { path: '/posts', element: <GetAllPosts /> },
];
