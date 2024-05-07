import React from 'react';
import { ContanerNewsPape } from '../../pages/PressCenter/newspaper/styles';
import SchemaCompany from '../../pages/company/SchemaCompany';
import { useFetchCorruptionQuery } from '../../redux/services/corruption';
import Loader from '../Loader';

export default function Corruption() {
  const { data: corruption, isLoading } = useFetchCorruptionQuery();

  return (
    <SchemaCompany
      name={'Противодействие коррупции'}
      content={
        <div style={{ width: '80%', margin: '0 auto' }}>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {corruption?.map((el) => (
                <ContanerNewsPape>
                  <a href={el.link} target={'_blank'} rel="noreferrer">
                    {el.name}
                  </a>
                </ContanerNewsPape>
              ))}
            </>
          )}
        </div>
      }
    />
  );
}
