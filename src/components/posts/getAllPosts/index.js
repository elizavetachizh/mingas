import { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';
import ContainerContent from '../../Container';
import DopFunctional from './dopFunctional';

export default function GetAllPosts() {
  const [info, setInfo] = useState([]);
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
  return (
    <ContainerContent
      name={'Важно знать, безопасность'}
      content={
        <>
          {info.map((el) => {
            if (el.type === 'safety') {
              return <DopFunctional name={el.name} description={el.description} id={el._id} />;
            }
          })}
        </>
      }
    />
  );
}
