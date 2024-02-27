import { Input } from '../styles';
import { DivInput, Label } from '../../formQuestion/styles';
import React from 'react';

export default function FormInput({
  label,
  span,
  error,
  name,
  onChange,
  type,
  value,
  placeholder,
}) {
  return (
    <DivInput>
      <Label>
        {label}
        {span && <span>*</span>}
      </Label>
      <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </DivInput>
  );
}
