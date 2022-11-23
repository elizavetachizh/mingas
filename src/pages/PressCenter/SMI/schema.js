import { Article } from '../styles';

export default function SchemaSMI({ href, src, content }) {
  return (
    <Article>
      <a rel="noopener" target={'_blank'} href={href}>
        <img alt={''} src={src} />
        <p>{content}</p>
      </a>
    </Article>
  );
}
