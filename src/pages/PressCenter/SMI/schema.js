import { Article } from '../styles';

export default function SchemaSMI({ href, src, content, date }) {
  return (
    <div>
      <Article>
        <a rel="noopener" target={'_blank'} href={href}>
          <img alt={''} src={src} />
          <p>{content}</p>
        </a>
      </Article>
      {date && <p>Статья была добавлена: {date}</p>}
    </div>
  );
}
