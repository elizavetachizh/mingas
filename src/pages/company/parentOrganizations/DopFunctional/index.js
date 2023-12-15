import { ContainerForInform } from '../styles';

export default function DopFunctional({ link, img, name, id, info }) {
  return (
    <ContainerForInform key={id}>
      <div>
        <a rel="noreferrer" target={'_blank'} href={link}>
          <img src={require(`../../../../assets/png/${img}.png`)} alt={name} />
        </a>
        <h3 style={{ color: '#0d4475' }}>{name}</h3>
      </div>
      <div>{info}</div>
    </ContainerForInform>
  );
}
