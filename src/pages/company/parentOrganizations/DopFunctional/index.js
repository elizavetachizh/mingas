import { ContainerForInform } from '../styles';

export default function DopFunctional({ link, img, name, id }) {
  return (
    <ContainerForInform key={id}>
      <a rel="noreferrer" target={'_blank'} href={link}>
        <img src={require(`../../../../assets/png/${img}.png`)} alt={name} />
      </a>
    </ContainerForInform>
  );
}
