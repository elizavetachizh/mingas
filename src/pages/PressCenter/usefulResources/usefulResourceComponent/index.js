import { useFetchUsefulResourcesByIdQuery } from '../../../../redux/services/usefulResources';
import ContainerContent from '../../../../components/Container';
import Loader from '../../../../components/Loader';
import DopFunctional from '../../../../components/posts/DopFunctional';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function UsefulResourceComponent() {
  const { id } = useParams();
  const { data, isLoading } = useFetchUsefulResourcesByIdQuery(id);
  return (
    <ContainerContent
      name={data?.name}
      content={
        isLoading ? <Loader /> : <DopFunctional id={data?._id} description={data?.content} />
      }
    />
  );
}
