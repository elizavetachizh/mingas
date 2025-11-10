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
    <ContainerPosts withImages={!!images}>
      <ContainerInfoPosts withImages={!!images} id={`description-${id}`} />
      {images?.length > 0 ? (
        <ContainerInfoPosts style={{textAlign:"center"}}>
          {images?.map((image) => (
            <img style={{ maxWidth: '600px', marginBottom: '1rem' }} src={image} alt={''} />
          ))}
        </ContainerInfoPosts>
      ) : (
        <ContainerInfoPosts withImages={!!images} id={`images-${id}`} />
      )}
    </ContainerPosts>
  );
}
