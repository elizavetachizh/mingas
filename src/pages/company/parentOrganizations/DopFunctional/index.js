import { ContainerForInform } from '../styles';

export default function DopFunctional({ link, img, name }) {
  return (
    <ContainerForInform>
      <a rel="noreferrer" target={'_blank'} href={link}>
        <img src={require(`../../../../assets/png/${img}.png`)} alt={name} />
      </a>
    </ContainerForInform>
  );
}
