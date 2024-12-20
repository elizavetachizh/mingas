import { ContainerInfoPosts, ContainerPosts } from './styles';
import { useEffect } from 'react';
export default function DopFunctional({ description, id, images }) {
  useEffect(() => {
    const element = document.getElementById(`description-${id}`);
    const imagesElement = document.getElementById(`images-${id}`);
    if (element) {
      element.innerHTML += description ? description : '';
    }
    if (imagesElement) {
      imagesElement.innerHTML += images ? images : '';
    }
  }, [description, id, images]);

  return (
    <ContainerPosts>
      <ContainerInfoPosts id={`description-${id}`} />
      <ContainerInfoPosts id={`images-${id}`} />
    </ContainerPosts>
  );
}
