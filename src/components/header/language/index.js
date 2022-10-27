import React, { useEffect } from 'react';
import { Div } from './styles';

export default function Language() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'ru',
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      'google_translate_element'
    );
  };
  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute(
      'src',
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return <Div id="google_translate_element" />;
}
