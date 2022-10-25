import { Input } from '../styles';

const divStyle = {
  margin: '0',
  width: '100%',
  textAlign: 'center',
};
export default function InputDate({ error, inputDate, onChange, type, value, placeholder }) {
  return (
    <div style={divStyle}>
      <Input
        type={type}
        name={inputDate}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
