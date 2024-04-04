import { TextArea } from '../styles';
import { DivInput, Label } from '../../formQuestion/styles';
import React from 'react';
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
  label,
  span,
}) {
  return (
    <DivInput>
      <Label>
        {label}
        {span && <span>*</span>}
      </Label>
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
    </DivInput>
  );
}
