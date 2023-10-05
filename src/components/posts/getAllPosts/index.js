import { useEffect } from 'react';
import ContainerContent from '../../Container';
import DopFunctional from './dopFunctional';
import { useFetchMainPostsQuery } from '../../../redux/services/mainpost';
import { setMainPosts } from '../../../redux/slices/mainPostsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function GetAllPosts() {
  const dispatch = useDispatch();
  const { data: fetchMainPosts, isLoading } = useFetchMainPostsQuery();
  useEffect(() => {
    if (!isLoading) {
      dispatch(setMainPosts(fetchMainPosts));
    }
  }, [isLoading, dispatch, fetchMainPosts]);
  const posts = useSelector((state) => state.mainPosts.data);

  return (
    <ContainerContent
      name={'Важно знать, безопасность'}
      content={
        <>
          {posts?.map(
            (el) =>
              el.type === 'safety' && (
                <DopFunctional name={el.name} description={el.description} id={el._id} />
              )
          )}
        </>
      }
    />
  );
}
