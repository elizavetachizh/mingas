import { BlockSearchService } from '../administrativeServices/InformaationAdministrativeService/styles';
import React from 'react';

export default function BlockSerach({ result }) {
  return (
    <BlockSearchService>
      {result.length ? (
        result.map((element) => (
          <div key={element.id}>
            <a
              rel="noopener noreferrer"
              style={{ margin: '20px auto' }}
              href={`${element.link}`}
              target={'_blank'}
            >
              {element.name}
            </a>
          </div>
        ))
      ) : (
        <p>К сожалению, такой процедуры найти не удалось</p>
      )}
    </BlockSearchService>
  );
}
