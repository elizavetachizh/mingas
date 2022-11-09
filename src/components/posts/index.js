import React, { useEffect, useState } from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { posts } from '../../assets/data/posts';
import { useParams } from 'react-router-dom';
export default function Posts() {
  const { id } = useParams();
  const [inform, setInform] = useState('');
  const [currentDocumentId, setDocumentId] = useState(null);
  const [name, setName] = useState('');
  useEffect(() => {
    const current = posts.find((element) => element.id === +id);
    setInform(current.description);
    setDocumentId(+id);
    setName(current?.name);
  }, [currentDocumentId, id, inform]);
  console.log(inform);
  return <ContainerContent name={name} content={<DopFunctional description={inform} />} />;
}
