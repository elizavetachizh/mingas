import React, { useEffect, useState } from 'react';
import { Links } from './styles';
import ContainerContent from '../Container';
import axios from 'axios';
import {API, APIimage} from '../../backend';
export default function ResidentsOfCapitalRegion() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/prices`)
      .then((res) => {
        setInfo(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        {
          console.log(e);
        }
      });
  }, [setInfo]);
  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <Links>
          {!!info.length &&
            info.map((el) => (
              <a
                href={`${APIimage}/${el.description}`}
                target={'_blank'}
                rel="opener noreferrer"
              >
                {el.name}
              </a>
            ))}
        </Links>
      }
    />
  );
}
