import { ContainerPosts } from './styles';
import { useEffect } from 'react';
export default function DopFunctional({ description, id }) {
  const element = document.getElementById(`description-${id}`);
  useEffect(() => {
    if (element) {
      element.innerHTML += description;
    }
  }, [description, element]);
  return <ContainerPosts id={`description-${id}`} />;
}
