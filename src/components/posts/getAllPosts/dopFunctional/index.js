import React, { useEffect, useState } from 'react';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function DopFunctional({ name, description, id }) {
  const [open, setOpen] = useState(false);
  const animate = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };

  useEffect(() => {
    const element = document.getElementById(`description-${id}`);
    if (element) {
      element.innerHTML += description;
    }
  }, [description, id]);
  return (
    <General>
      <BtnIsOpen onClick={animate}>
        <p>{name}</p>
        <div>
          {open ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '42% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '42% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={open && `shake`} id={`description-${id}`} />
    </General>
  );
}
