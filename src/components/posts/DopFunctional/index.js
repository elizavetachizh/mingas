import { ContainerPosts } from './styles';
import { useEffect } from 'react';
export default function DopFunctional({ description }) {
  const element = document.getElementById(`description`);
  useEffect(() => {
    if (element) {
      element.innerHTML += description;
    }
  }, [description, element]);
  return <ContainerPosts id={'description'} />;
}
