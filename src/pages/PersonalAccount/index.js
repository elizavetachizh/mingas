import { Container } from '../Home/styles';
import background from '../../assets/background/fon.jpg';
import { Body, Li, Ul, A } from './styles';
import Header from '../../components/header';
import { Title } from "../services/styles";
const styleBackground = {
  backgroundImage: `url(${background})`,
};
export default function Personal() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>

      <Body>

        <Ul>
          <A>Клиент УП "Мингаз"</A>
          <A href="/Personal/tasks">Сотрудник УП "Мингаз"</A>
        </Ul>
      </Body>
    </Container>
  );
}
