import React from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { posts } from '../../assets/data/posts';
export default function Posts() {

  return (
    <ContainerContent
      name={'УП «МИНГАЗ» просит своих абонентов быть бдительными'}
      content={
       <DopFunctional description={posts[0].description} />
      }
    />
  );
}
