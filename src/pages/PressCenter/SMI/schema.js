import { Article } from '../styles';

export default function SchemaSMI({ href, src, content, date }) {
  return (
    <>
      <a rel="noopener" target={'_blank'} href={href}>
        <Article>
          <img alt={''} src={src} />
          <p>{content}</p>
        </Article>
      </a>
      {date && <p style={{ marginTop: 0 }}>Статья была добавлена: {date}</p>}
    </>
  );
}
