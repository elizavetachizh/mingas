import { Container } from '../../pages/company/styles';
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import TitleForHome from '../TitleForHome';

export default function Corruption() {
  return (
    <Container>
      <Header />
      <AdditionalDiv>
        <TitleForHome color={'blue'} infoTitle={'Противодействие коррупции'} />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
