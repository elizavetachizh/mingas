import { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';
import ContainerContent from '../../Container';
import DopFunctional from './dopFunctional';

export default function GetAllPosts() {
  const [info, setInfo] = useState([]);
  const id ='642184e7552d357fa6d014ad'
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
    useEffect(()=>{
        const current = info.find((element) => element._id === id);
        console.log(current)
        console.log(info)},[info])
  return (
    <ContainerContent
      name={'Важно знать, безопасность'}
      content={
        <>
          {info.slice(0, 3).map((el) => (
            <DopFunctional name={el.name} description={el.description} id={el._id} />
          ))}
        </>
      }
    />
  );
}
