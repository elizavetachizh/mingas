import React, { useEffect, useState } from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { useParams } from 'react-router-dom';
import { API } from '../../backend';
import axios from 'axios';
import { useFetchMainPostByIdQuery } from '../../redux/services/mainpost';
export default function Posts() {
  const { id } = useParams();
  const { data: mainPostsById, isLoading } = useFetchMainPostByIdQuery(id);
  // console.log(mainPostsById);
  // console.log(id);
  const [infoNew, setInfoNew] = useState(null);
  useEffect(() => {
    const apiUrl = `${API}/new-posts/${id}`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfoNew(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
   console.log(infoNew);
  return (
    <ContainerContent
      name={infoNew ? infoNew?.content : mainPostsById ? mainPostsById?.content : ''}
      content={
        <DopFunctional
          id={infoNew ? infoNew?._id : mainPostsById ? mainPostsById?._id : ''}
          description={infoNew ? infoNew?.description : mainPostsById?.description}
          images={infoNew ? infoNew?.images : mainPostsById ? mainPostsById?.images : ''}
        />
      }
    />
  );
}
