import React from 'react';
import { useFetchDocumentsQuery } from '../../../redux/services/documentsEDI';
import {
  BtnIsOpen,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import Loader from '../../../components/Loader';

export default function EDI() {
  const { data: documents, isLoading } = useFetchDocumentsQuery();
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {documents?.map((el) => (
            <General>
              <BtnIsOpen>
                <a style={{ color: 'white', padding: '0 0.5rem' }} href={el.url} download>
                  {el.name}
                </a>
              </BtnIsOpen>
            </General>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}
