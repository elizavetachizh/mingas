import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Footer from '../footer';
import HeaderAdministrativeServices from './Header';
import { Container } from '../../pages/styles';
import InformationAdministrativeService from './InformaationAdministrativeService';
export default function AdministrativeServices() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <HeaderAdministrativeServices />
        {/*<InformationAdministrativeService />*/}
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
