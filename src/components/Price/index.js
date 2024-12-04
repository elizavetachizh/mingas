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
                    <button onClick={() => handlePreview(`${el.file}`)}>{el.name}</button>

                    {selectedFile && selectedFile === el.file && (
                      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <a
                          className={'right-link'}
                          href={`https://mingas.by/${selectedFile}`}
                          id={'href'}
                          target={'_blank'}
                          rel="opener noreferrer"
                        >
                          Скачать
                        </a>
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
