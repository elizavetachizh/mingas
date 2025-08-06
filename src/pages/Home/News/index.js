import React, { useEffect, useState } from 'react';
import ButtonFun from '../../../components/button';
import { DivInform } from './styles';
import TitleForHome from '../../../components/TitleForHome';
import { BlockContainerRequests } from '../../feedback/styles';
import axios from 'axios';
import LinkNews from './LinkToNews';
import { API } from '../../../backend';
export default function News() {
  // const [info, setInfo] = useState(null);
  // useEffect(() => {
  //   const apiUrl = `${API}/posts`;
  //   axios
  //     .get(apiUrl)
  //     .then((res) => {
  //       setInfo(res.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);

  const [infoNew, setInfoNew] = useState(null);
  useEffect(() => {
    const apiUrl = `${API}/new-posts`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfoNew(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log(infoNew);
  const arr = infoNew?.slice(0, 4);
  return (
    <BlockContainerRequests>
      <TitleForHome color={'blue'} infoTitle={'Лента новостей'} />
      {/*<DivInform>*/}
      {/*  {arr?.map((el) => (*/}
      {/*    <LinkNews href={el.link} src={el.image} name={el?.name} />*/}
      {/*  ))}*/}
      {/*</DivInform>*/}
      <DivInform>
        {arr?.map((el) => (
          <LinkNews href={el?.link ? el.link : `posts/${el._id}`} src={el.image} name={el?.name} />
        ))}
      </DivInform>
      <ButtonFun
        href={'/press-center/1'}
        infoButton={'Показать ещё'}
        backgrounder={'blue'}
        style={{ margin: '0 auto 1%' }}
      />
    </BlockContainerRequests>
  );
}
