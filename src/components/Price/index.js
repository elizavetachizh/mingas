import React, { useEffect, useState } from 'react';
import { Links } from './styles';
import ContainerContent from '../Container';
import axios from 'axios';
import { API } from '../../backend';
import { useNavigate } from 'react-router';
export default function ResidentsOfCapitalRegion() {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
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
                href={`http://localhost/public/images/${el.description}`}
                target={'_blank'}
                rel="opener"
              >
                {el.name}
              </a>
            ))}
        </Links>
      }
    />
  );
}
