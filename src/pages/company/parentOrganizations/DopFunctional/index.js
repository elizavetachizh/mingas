import { BlockInform, BlockLingAndImage, ContainerForInform } from '../styles';

export default function DopFunctional({ link, name, address, phone, fax, workMode, img }) {
  return (
    <ContainerForInform>
      <BlockLingAndImage>
        <a href={link}>
          {/*<p>{name}</p>*/}
          <img src={require(`../../../../assets/png/${img}.png`)} alt={''} />
        </a>
      </BlockLingAndImage>
      {/*<BlockInform>*/}
      {/*  <p>{address}</p>*/}
      {/*  <a href={`tel:${phone}`}>{phone}</a>*/}
      {/*  <p>{fax}</p>*/}
      {/*  <p>{workMode}</p>*/}
      {/*</BlockInform>*/}
    </ContainerForInform>
  );
}
