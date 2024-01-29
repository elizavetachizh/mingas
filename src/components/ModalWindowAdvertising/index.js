import React, { useEffect, useState } from 'react';
import { Overlay } from './styles';
export default function ModalWindowAdvertising() {
  const [image, setImages] = useState(1);

  useEffect(() => {
    const timer = setTimeout(
      () => (document.getElementById('overlay').style.display = 'block'),
      3000
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const arrayImages = [1, 2, 3, 4];
    const rand = Math.floor(Math.random() * arrayImages.length);
    setImages(rand+1);
  }, []);

  return (
    <Overlay id="overlay">
      <div className="popup">
        <div className="pl-left">
          <img src={require(`./images/${image}.jpg`)} alt={''} />
        </div>
        <button
          className="close"
          title="Закрыть"
          onClick={() => {
            document.getElementById('overlay').style.display = 'none';
          }}
        ></button>
      </div>
    </Overlay>
  );
}
