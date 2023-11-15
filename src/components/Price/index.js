import React, { useEffect, useState } from 'react';
import { Links } from './styles';
import ContainerContent from '../Container';
import axios from 'axios';
import { API } from '../../backend';
import Loader from '../Loader';
export default function ResidentsOfCapitalRegion() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios(`${API}/prices`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <>
          {info?.length ? (
            <Links>
              {info.map((el) => (
                <a href={el.description} id={'href'} target={'_blank'} rel="opener noreferrer">
                  {el.name}
                </a>
              ))}
            </Links>
          ) : (
            <Loader />
          )}
        </>
      }
    />
  );
}
