import { ContainerForInform } from '../styles';

export default function DopFunctional({ link, img, name, id, info }) {
  return (
    <ContainerForInform key={id}>
      <div>
        <a rel="noreferrer" target={'_blank'} href={link}>
          <img src={require(`../../../../assets/png/${img}.webp`)} alt={name} />
        </a>
      </div>
      <div>{info}</div>
    </ContainerForInform>
  );
}
