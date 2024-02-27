import { DivInputCheckbox, Label } from '../formQuestion/styles';
import React from 'react';

export default function AgreeWithRules({ handleCheckBox, requestValues }) {
  return (
    <DivInputCheckbox>
      <input
        type="checkbox"
        onChange={handleCheckBox}
        checked={requestValues.isAgree}
        name="isAgree"
      />
      <Label>
        Даю согласие на обработку моих персональных данных для выбранной цели в соответствии с{' '}
        <a type={'download'} href={'https://back.mingas.by/public/documents/confidentiality.pdf'}>
          Политикой обработки персональных данных
        </a>
        <span>*</span>
      </Label>
    </DivInputCheckbox>
  );
}
