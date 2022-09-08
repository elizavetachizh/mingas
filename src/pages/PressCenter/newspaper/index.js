import { data } from './data';
import { ContanerNewsPape } from './styles';

export default function Newspaper() {
  const dataReverse = data.reverse();
  console.log(dataReverse);
  return (
    <div>
      <ContanerNewsPape>
        <img src={require('../../../assets/png/newspaper.png')} />
        <a
          href={require('../../../assets/pdf/newspaper/gazeta_last.pdf')}
          target={'_blank'}
          rel="noreferrer"
        >
          Последний выпуск
        </a>
      </ContanerNewsPape>
      {dataReverse.map((el) => (
        <ContanerNewsPape>
          <img src={require('../../../assets/png/newspaper.png')} />
          <a href={el.link} target={'_blank'} rel="noreferrer">
            {el.name}
          </a>
        </ContanerNewsPape>
      ))}
    </div>
  );
}
