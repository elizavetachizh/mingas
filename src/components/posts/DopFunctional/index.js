import { ContainerPosts } from './styles';
import { useEffect } from 'react';
export default function DopFunctional({ description, id }) {
  useEffect(() => {
    const element = document.getElementById(`description-${id}`);
    if (element) {
      element.innerHTML += description ? description : '';
    }
  }, [description, id]);
  useEffect(() => {
    console.log(description);
    console.log(id);
  }, [id, description]);
  return (<>
    <ContainerPosts id={`description-${id}`} />
  </>);
}
