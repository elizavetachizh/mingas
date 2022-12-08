import { ContainerPosts } from './styles';
import { useCallback, useEffect } from 'react';
export default function DopFunctional({ description }) {
  // const element = ;
  const getElement = useCallback((inform) => {
    return document.getElementById(`description-${inform}`);
  }, []);
  useEffect(() => {
    const element = getElement(description);
    if (element) {
      element.innerHTML += description;
    }
  }, [description, getElement]);
  return <ContainerPosts id={`description-${description}`} />;
}
