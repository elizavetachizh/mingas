import { Container } from '../../pages/company/styles';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import FormTelemetria from './form';
import Header from '../header';

export default function Telemetria() {
  return (
    <Container>
      <Header />
      <AdditionalDiv>
        <p>Информация</p>
        <FormTelemetria />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
