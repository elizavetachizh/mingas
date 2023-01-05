import { ContainerPosts } from './styles';
import { useEffect } from 'react';
export default function DopFunctional({ description }) {
  useEffect(() => {
    const element = document.getElementById(`description`);
    if (element) {
      element.innerHTML += description;
    }
  }, [description]);
  return <ContainerPosts id={'description'} />;
}
