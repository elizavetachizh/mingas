import ContainerContent from '../../Container';
import DopFunctional from './dopFunctional';
import { useFetchMainPostsByTypeQuery } from '../../../redux/services/mainpost';
import Loader from '../../Loader';

export default function GetAllPosts() {
  const { data: fetchMainPostsByType } = useFetchMainPostsByTypeQuery();
  return (
    <ContainerContent
      name={'Важно знать, безопасность'}
      content={
        <>
          {fetchMainPostsByType?.length ? (
            fetchMainPostsByType?.map((el) => (
              <DopFunctional name={el.name} description={el.description} id={el._id} />
            ))
          ) : (
            <Loader />
          )}
        </>
      }
    />
  );
}
