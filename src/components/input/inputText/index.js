import { TextArea } from '../styles';

const divStyle = {
  margin: '0',
  width: '100%',
  textAlign: 'center',
};
export default function InputText({
  error,
  text,
  onChange,
  type,
  value,
  placeholder,
  style,
  className,
  wrap,
}) {
  return (
    <div style={divStyle}>
      <TextArea
        style={style}
        type={type}
        name={text}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        wrap={wrap}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
