import { Input } from '../styles';

export default function FormInput({ error, name, onChange, type, value, placeholder }) {
  return (
    <div>
      <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
