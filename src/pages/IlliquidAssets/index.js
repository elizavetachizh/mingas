import ContainerContent from '../../components/Container';
import React, { useEffect, useState } from 'react';
import { API } from '../../backend';
import axios from 'axios';
import { Links } from '../../components/Price/styles';
import Loader from '../../components/Loader';

export default function IlliquidAssets() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const apiUrl = `${API}/illiquids`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  const handleFileClick = (fileName) => {
    // Здесь мы создаем ссылку для скачивания файла
    const fileUrl = `https://mingas.by/${fileName}`; // Замените на ваш URL для скачивания
    window.open(fileUrl, '_blank');
  };

  return (
    <ContainerContent
      name={'Реализация неликвидов'}
      content={
        <>
          {info?.length ? (
            <>
              <Links>
                {info.map((el) => (
                  <React.Fragment>
                    <button
                      style={{ display: 'flex', justifyContent: 'space-between' }}
                      onClick={() => handleFileClick(`${el.file}`)}
                    >
                      <p style={{ background: 'none', width: '100%' }}>{el.name}</p>
                    </button>
                  </React.Fragment>
                ))}
              </Links>
            </>
          ) : (
            <Loader />
          )}
        </>
      }
    />
  );
}
