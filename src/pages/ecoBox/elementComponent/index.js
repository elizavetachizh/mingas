import React, { useState } from 'react';
import { DescriptionService } from '../../services/DopFunction/styles';
import {
  BtnIsOpen,
  BtnIsOpenWithoutBackground,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function ElementComponent({
  additionalProps,
  nameDescription,
  inform,
  classname,
  images,
  isPhone,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const HtmlRenderer = ({ html }) => {
    return <DescriptionService dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <General>
      <BtnIsOpenWithoutBackground className={classname} onClick={() => setIsOpen(!isOpen)}>
        <p>{nameDescription}</p>
        <div>
          {isOpen ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
          )}
        </div>
      </BtnIsOpenWithoutBackground>
      <Div className={isOpen && `shake`}>
        <HtmlRenderer html={inform} />
        {!!additionalProps && (
          <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0.5rem' }}>
            <BtnIsOpen style={{ padding: '0.2rem 0.5rem' }}>Стоимость</BtnIsOpen>
            <p style={{ margin: '0 0.5rem' }}>{additionalProps}</p>
          </div>
        )}
        {!!images && (
          <div style={{ textAlign: 'center' }}>
            {images?.map(
              (image, index) =>
                image !== '' && (
                  <img
                    style={
                      isPhone
                        ? { maxWidth: '300px', marginBottom: '0.5rem' }
                        : { maxWidth: '500px', marginBottom: '0.5rem' }
                    }
                    src={image}
                    alt={index}
                    key={index}
                  />
                )
            )}
          </div>
        )}
      </Div>
    </General>
  );
}
