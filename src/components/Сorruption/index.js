import React from 'react';
import { ContanerNewsPape } from '../../pages/PressCenter/newspaper/styles';
import { useFetchCorruptionQuery } from '../../redux/services/corruption';
import Loader from '../Loader';

export default function Corruption() {
  const { data: corruption, isLoading } = useFetchCorruptionQuery();

  return (
      <>
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
      </>
  );
}
