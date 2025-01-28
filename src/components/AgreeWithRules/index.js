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
        <a style={{fontSize:'14px'}} type={'download'} href={'https://back.mingas.by/admin/upload/files/1738046979037-Политика_Мингаз_для сайта.pdf'}>
          Политикой обработки персональных данных
        </a>
        <span>*</span>
      </Label>
    </DivInputCheckbox>
  );
}
