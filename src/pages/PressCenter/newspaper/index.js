import { data } from './data';
export default function Newspaper() {
  return (
    <div>
      {data.map((el) => (
        <div>
          <a href={el.link} target={'_blank'}>
            {el.name}
          </a>
        </div>
      ))}
    </div>
  );
}
