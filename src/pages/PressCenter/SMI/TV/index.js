import { Div } from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import React from 'react';
import { useFetchTVQuery } from '../../../../redux/services/TV';
import Loader from '../../../../components/Loader';

export default function TV() {
  const { data: TV } = useFetchTVQuery();

  return (
    <Div className={`shake`}>
      {!!TV?.length ? (
        <>
          {TV?.map((el) => (
            <>
              <p style={{marginBottom:0}}>{el.name}</p>
              <iframe
                src={el.link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </Div>
  );
}
