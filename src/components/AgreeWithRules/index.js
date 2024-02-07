import { DivInputCheckbox, InputCheckbox, Label, Span } from '../formQuestion/styles';
import React from 'react';

export default function AgreeWithRules({ handleCheckBox, requestValues, errors }) {
  return (
    <DivInputCheckbox>
      <InputCheckbox
        type="checkbox"
        onChange={handleCheckBox}
        checked={requestValues.isAgree}
        inputName="isAgree"
        error={errors.isAgree}
      />
      <Label>
        Даю согласие на обработку моих персональных данных для выбранной цели в соответствии с{" "}
        <a type={'download'} href={'https://back.mingas.by/public/documents/confidentiality.pdf'}>
          Политикой обработки персональных данных
        </a>
        <Span>*</Span>
      </Label>
    </DivInputCheckbox>
  );
}
