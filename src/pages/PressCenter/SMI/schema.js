import { Article } from '../styles';

export default function SchemaSMI({ href, src, content, date }) {
  const [year, month, day] = date.split('-');
  const changedDate = `${day}.${month}.${year}`;
  return (
    <Article>
      <a rel="noopener" target={'_blank'} href={href}>
        <img alt={''} src={src} />
        <div>
          {date && <p style={{ color: '#575757' }}>{changedDate}</p>}
          <p style={{ fontWeight: 'bold' }}>{content}</p>
        </div>
      </a>
    </Article>
  );
}
