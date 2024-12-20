import { data } from './data';
import { ContanerNewsPape } from './styles';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import React, { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';

export default function Newspaper() {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const apiUrl = `${API}/newspapers_get`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  console.log(info);

  const dataReverse = data.reverse();

  return (
    <div>
      <ContanerNewsPape>
        <img alt={''} src={require('../../../assets/png/newspaper.png')} />
        <a
          href={require('../../../assets/pdf/newspaper/august_2023.pdf')}
          target={'_blank'}
          rel="opener noreferrer"
        >
          Столичный Газовик № 47 / август 2023
        </a>
      </ContanerNewsPape>
      {info?.map(
        (newspaper) =>
          !newspaper.archive && (
            <ContanerNewsPape>
              <img alt={''} src={require('../../../assets/png/newspaper.png')} />
              <a
                href={`https://mingas.by/${newspaper.file}`}
                target={'_blank'}
                rel="opener noreferrer"
              >
                {newspaper.name}
              </a>
            </ContanerNewsPape>
          )
      )}
      <General>
        <BtnIsOpen onClick={() => setIsOpen(!isOpen)}>
          <p>Архив газет</p>
          <div>
            {isOpen ? (
              <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
            )}
          </div>
        </BtnIsOpen>
        <Div className={isOpen && `shake`}>
          {info?.map(
            (newspaper) =>
              newspaper.archive && (
                <ContanerNewsPape>
                  <img alt={''} src={require('../../../assets/png/newspaper.png')} />
                  <a
                    href={`https://mingas.by/${newspaper.file}`}
                    target={'_blank'}
                    rel="opener noreferrer"
                  >
                    {newspaper.name}
                  </a>
                </ContanerNewsPape>
              )
          )}
          {dataReverse.map((el) => (
            <ContanerNewsPape key={el.id}>
              <img alt={''} src={require('../../../assets/png/newspaper.png')} />
              <a
                href={require(`../../../assets/pdf/newspaper/${el.link}.pdf`)}
                target={'_blank'}
                rel="noreferrer"
              >
                {el.name} / {el.data}
              </a>
            </ContanerNewsPape>
          ))}
        </Div>
      </General>
    </div>
  );
}
