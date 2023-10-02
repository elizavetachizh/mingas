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
  const [isId, setIsId] = useState(null);
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
  }, []);

  useEffect(() => {
    const current = info.find((element) => element._id === id);
    setInform(current?.description);
    setName(current?.name);
    setIsId(current?._id);
  }, [id, info]);
  return (
    <ContainerContent name={name} content={<DopFunctional id={isId} description={inform} />} />
  );
}
