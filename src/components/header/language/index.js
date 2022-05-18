import React from 'react';
import { Select } from './styles';
import i18n from "i18next";
import { availableLanguages } from "../../../i18n";

export default function Language() {
  return (
   <Select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
     {availableLanguages.map((language) => (
       <option key={language}>{language}</option>
     ))}
   </Select>
  );
}
