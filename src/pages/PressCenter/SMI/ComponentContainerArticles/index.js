import { ContainerArticles } from '../../styles';
import SchemaSMI from '../schema';
import Loader from '../../../../components/Loader';
import Pagination from '../Pagination';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetchPostsQuery } from '../../../../redux/services/posts';
import { setPosts } from '../../../../redux/slices/postsSlice';

export default function ComponentContainerArticles() {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { data: fetchPosts, isLoading } = useFetchPostsQuery({ page });
  useEffect(() => {
    if (!isLoading) {
      dispatch(setPosts(fetchPosts));
    }
  }, [isLoading, dispatch, fetchPosts]);

  return (
    <ContainerArticles>
      {fetchPosts?.results?.length ? (
        <>
          {fetchPosts?.results?.map((el) => (
            <SchemaSMI href={el.link} src={el.image} content={el.content} date={el.date} />
          ))}
          <Pagination setPage={setPage} page={page} />
        </>
      ) : (
        <Loader />
      )}
    </ContainerArticles>
  );
}
