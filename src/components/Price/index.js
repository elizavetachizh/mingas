import React, { useEffect, useState } from 'react';
import { Links } from './styles';
import ContainerContent from '../Container';
import axios from 'axios';
import { API } from '../../backend';
import Loader from '../Loader';
export default function ResidentsOfCapitalRegion() {
  const [info, setInfo] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    axios(`${API}/prices`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  const handlePreview = (fileUrl) => {
    setSelectedFile(fileUrl);
  };

  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <>
          {info?.length ? (
            <>
              <Links>
                {info.map((el) => (
                  <React.Fragment>
                    <button
                      style={{ display: 'flex', justifyContent: 'space-between' }}
                      onClick={() => handlePreview(`${el.file}`)}
                    >
                      <p style={{ background: 'none', width:'100%' }}>{el.name}</p>{' '}
                      <a
                        style={{ margin: '0' }}
                        className={'right-link'}
                        href={`https://mingas.by/${selectedFile}`}
                        id={'href'}
                        target={'_blank'}
                        rel="opener noreferrer"
                      >
                        Скачать
                      </a>
                    </button>

                    {selectedFile && selectedFile === el.file && (
                      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <iframe
                          className={'iframe'}
                          src={`https://mingas.by/${selectedFile}`}
                          height={'600px'}
                          title={selectedFile}
                        />
                      </div>
                    )}
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
