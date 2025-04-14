import { BlockContainerRequests } from '../../feedback/styles';
import TitleForHome from '../../../components/TitleForHome';
import { DivInform } from '../News/styles';
import LinkNews from '../News/LinkToNews';
import ButtonFun from '../../../components/button';
import React, { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';

export default function UsefulResourcesHome() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const apiUrl = `${API}/useful_resources`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  // const arr = info?.results?.slice(0, 4);
  console.log(info);
  return (
    <BlockContainerRequests>
      <TitleForHome color={'blue'} infoTitle={'Полезные ресурсы'} />
      <DivInform>
        {info?.map((el) => (
          <LinkNews
            href={el.link ? el.link : `useful-resources/${el._id}`}
            src={el.image}
            name={el?.name}
          />
        ))}
      </DivInform>
      <ButtonFun
        href={'/press-center/6'}
        infoButton={'Показать ещё'}
        backgrounder={'blue'}
        style={{ margin: '0 auto 1%' }}
      />
    </BlockContainerRequests>
  );
}
