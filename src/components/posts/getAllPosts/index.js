import { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';
import ContainerContent from '../../Container';
import DopFunctional from './dopFunctional';

export default function GetAllPosts() {
  const [info, setInfo] = useState([]);
  const [dopInfo, setDopInfo] = useState([]);
  useEffect(() => {
    const apiUrl = `${API}/mainposts`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  useEffect(() => {
    const apiDopUrl = 'https://back.mingas.by/admin/mainposts/646c5ab8dd4af6c75c08448a';
    console.log(apiDopUrl);
    axios
      .get(apiDopUrl)
      .then((res) => {
        setDopInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setDopInfo]);
  useEffect(() => {
    console.log(dopInfo);
  }, [dopInfo]);
  return (
    <ContainerContent
      name={'Важно знать, безопасность'}
      content={
        <>
          {info.slice(0, 4).map((el) => (
            <DopFunctional name={el.name} description={el.description} id={el._id} />
          ))}
          {/*{dopInfo && (*/}
          {/*  <DopFunctional*/}
          {/*    name={dopInfo?.name}*/}
          {/*    description={dopInfo?.description}*/}
          {/*    id={dopInfo?._id}*/}
          {/*  />*/}
          {/*)}*/}
        </>
      }
    />
  );
}
