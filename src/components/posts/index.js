import React from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { useParams } from 'react-router-dom';
import { useFetchMainPostByIdQuery } from '../../redux/services/mainpost';
export default function Posts() {
  const { id } = useParams();
  const { data: mainPostsById } = useFetchMainPostByIdQuery(id);

  return (
    <ContainerContent
      name={mainPostsById?.name}
      content={
        mainPostsById ? (
          <DopFunctional id={mainPostsById?._id} description={mainPostsById?.description} />
        ) : (
          <p>Загрузка данных...</p>
        )
      }
    />
  );
}
