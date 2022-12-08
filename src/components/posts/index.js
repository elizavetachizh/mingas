import React, { useEffect, useState } from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { posts } from '../../assets/data/posts';
import { useParams } from 'react-router-dom';
import { API } from '../../backend';
import axios from 'axios';
export default function Posts() {
  const { id } = useParams();
  const [inform, setInform] = useState('');
  const [currentDocumentId, setDocumentId] = useState(null);
  const [name, setName] = useState('');
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const apiUrl = 'http://localhost/admin/mainposts';
    axios
      .get(apiUrl)
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

  useEffect(() => {
    console.log(info);
    const current = info.find((element) => element._id === id);
    setInform(current?.description);
    setDocumentId(id);
    setName(current?.name);
    console.log(inform);
  }, [currentDocumentId, id, info, setInform]);



  console.log(inform);
  return <ContainerContent name={name} content={<DopFunctional description={inform} />} />;
}
