import React from 'react';
import belarus from '../../../assets/icons_language/belarus.png';
import russia from '../../../assets/icons_language/russia.png';
import english from '../../../assets/icons_language/united-kingdom.png';
export default function Language() {
  return (
    <select>
      <option>Выберете язык</option>
      <option>
        <img src={belarus} />
      </option>
      <option>
        <img src={russia} />
      </option>
      <option>
        <img src={english} />
      </option>
    </select>
  );
}
