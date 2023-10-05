import React from 'react';
import ServicesComponent from '../../../../components/ServicesComponent';

export default function CardOfService() {
  return (
    <ServicesComponent
      type={'2'}
      router={'services-legal-entities'}
      titleName={'Услуги для юридических лиц'}
    />
  );
}
