import { Article } from '../styles';

export default function SchemaSMI({ href, src, content, date }) {
  return (
    <Article>
      <a rel="noopener" target={'_blank'} href={href}>
        <img alt={''} src={`https://mingas.by/${src}`} />
        <div>
          {date && <p style={{ color:'#575757' }}>{date}</p>}
          <p style={{ fontWeight: 'bold' }}>{content}</p>
        </div>
      </a>
    </Article>
  );
}
