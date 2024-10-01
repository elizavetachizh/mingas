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
                    <button onClick={() => handlePreview(`${el.url}`)}>{el.name}</button>
                    {selectedFile && selectedFile === el.url && (
                      <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                        <iframe
                          className={'iframe'}
                          src={selectedFile}
                          height={'600px'}
                          title={selectedFile}
                        />
                        <a
                          className={'right-link'}
                          href={`${el.url}`}
                          id={'href'}
                          target={'_blank'}
                          rel="opener noreferrer"
                        >
                          Скачать
                        </a>
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
