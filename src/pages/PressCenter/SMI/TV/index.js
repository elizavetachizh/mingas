import {
  BtnIsOpen,
  Div,
  General,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useFetchTVQuery } from '../../../../redux/services/TV';
import Loader from '../../../../components/Loader';

export default function TV() {
  const [isOpenTV, setIsOpenTV] = useState(false);
  const { data: TV } = useFetchTVQuery();

  return (
    <General>
      <BtnIsOpen onClick={() => setIsOpenTV(!isOpenTV)}>
        <p>Мингаз-ТВ</p>
        <div>
          {isOpenTV ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isOpenTV && `shake`}>
        {!!TV?.length ? (
          <>
            {TV?.map((el) => (
              <>
                <p>{el.name}</p>
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
    </General>
  );
}
