import React, { useEffect, useState } from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../backend';
export default function Posts() {
  const { id } = useParams();
  const [inform, setInform] = useState('');
  const [name, setName] = useState('');
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

  useEffect(() => {
    const current = info.find((element) => element._id === id);
    setInform(current?.description);
    setName(current?.name);
  }, [id, info, setInform]);

  return <ContainerContent name={name} content={<DopFunctional id={id} description={inform} />} />;
}
