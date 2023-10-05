import React from 'react';

import RegulatoryDocumentComponent from '../RegulatoryDocumentComponent';

export default function DepartmentInformation() {
  return (
    <RegulatoryDocumentComponent
      type={'1'}
      title={'Регламентирующие документы'}
      router={'regulatory-documents'}
    />
  );
}
