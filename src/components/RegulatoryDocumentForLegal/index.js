import React from 'react';

import RegulatoryDocumentComponent from '../RegulatoryDocumentComponent';

export default function RegulatoryDocumentsForLegal() {
  return (
    <RegulatoryDocumentComponent
      type={'2'}
      title={'Регламентирующие документы для юридических лиц'}
      router={'regulatory-documents-for-business'}
    />
  );
}
