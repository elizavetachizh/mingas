import React, { useCallback, useEffect, useState } from 'react';
import {
  ContainerInform,
  DivBlocks,
} from '../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../concats/headerContacts/styles';
import { BlockBtn, Name } from '../../components/administrativeServices/Header/styles';
import DopFunctionalHeader from '../services/NaturalGas/DopFunctionalHeader';
import { pressCenter } from '../../assets/data/pressCenterHeader';
import { useNavigate, useParams } from 'react-router';
import DopFunctionalPressCenter from './DopFunctional';
import ContainerContent from '../../components/Container';

export default function PressCenter() {
  const [inform, setInform] = useState('');
  const [currentNewsID, setNewsID] = useState(null);
  const [title, setTitle] = useState('');
  const [key, setKeys] = useState(null);
  const { descriptionID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = pressCenter.find((element) => element.id === +descriptionID);
    setInform(current.description);
    setTitle(current.name);
    setKeys(current.id);
    setNewsID(+descriptionID);
  }, [descriptionID]);

  const animate = useCallback(
    (descriptionID) => {
      const current = pressCenter.find((element) => element.id === +descriptionID);
      setInform(current.description);
      setTitle(current.name);
      setNewsID(descriptionID);
      navigate(`/press-center/${descriptionID}`);
    },
    [navigate]
  );
  return (
    <ContainerContent
      name={'Пресс-центр'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Пресс-центр</Name>
            {pressCenter.map((element) => (
              <BlockBtn key={element.id}>
                <DopFunctionalHeader
                  index={element.id}
                  nameCard={element.name}
                  className={currentNewsID === element.id ? 'background' : ''}
                  onClick={() => animate(element.id)}
                />
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            <DopFunctionalPressCenter index={key} inform={inform} />
          </ContainerInform>
        </DivBlocks>
      }
    />
  );
}
