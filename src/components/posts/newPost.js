import React from 'react';
import DopFunctional from './DopFunctional';
import ContainerContent from '../Container';
import { posts } from '../../assets/data/posts';
export default function PostNew() {
  return (
    <ContainerContent
      name={'11 ноября международный День энергосбережения'}
      content={<DopFunctional description={posts[1].description} />}
    />
  );
}
