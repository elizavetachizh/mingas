import {ContainerForInform } from '../styles';

export default function DopFunctional({ link, img }) {
  return (
    <ContainerForInform>
      <a href={link}>
        <img src={require(`../../../../assets/png/${img}.png`)} alt={''} />
      </a>
    </ContainerForInform>
  );
}
