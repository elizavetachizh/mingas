import React from 'react';
import belarus from '../../../assets/icons_language/belarus.png';
import russia from '../../../assets/icons_language/russia.png';
import english from '../../../assets/icons_language/united-kingdom.png';
import { Select } from './styles';

export default function Language() {
  return (
    <Select>
      <option>Выберете язык</option>
      <option>Белорусский</option>
      <option>Русский</option>
      <option>Английский</option>
    </Select>
  );
}
