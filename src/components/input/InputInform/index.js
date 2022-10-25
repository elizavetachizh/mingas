import { Input } from '../styles';

const divStyle = {
  margin: '0',
  width: '100%',
  textAlign: 'center',
};
export default function InputInform({ error, inputInform, onChange, type, value }) {
  return (
    <div style={divStyle}>
      <Input type={type} name={inputInform} value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </div>
  );
}
