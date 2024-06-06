import {
  ContainerInform,
  DivBlocks,
} from '../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../concats/headerContacts/styles';
import { BlockBtn, Name } from '../../components/administrativeServices/Header/styles';
import { company } from '../../assets/data/pressCenterHeader';
import DopFunctionalHeader from '../services/NaturalGas/DopFunctionalHeader';
import DopFunctionalPressCenter from '../PressCenter/DopFunctional';
import ContainerContent from '../../components/Container';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function Company() {
  const [inform, setInform] = useState('');
  const [currentNewsID, setNewsID] = useState(null);
  const [title, setTitle] = useState('');
  const [key, setKeys] = useState(null);
  const { descriptionID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = company.find((element) => element.router === descriptionID);
    setInform(current.description);
    setTitle(current.name);
    setKeys(current.id);
    setNewsID(descriptionID);
  }, [descriptionID]);

  const animate = useCallback(
    (descriptionID) => {
      const current = company.find((element) => element.router === descriptionID);
      setInform(current.description);
      setTitle(current.name);
      setNewsID(descriptionID);
      navigate(`/company/${descriptionID}`);
    },
    [navigate]
  );
  return (
    <ContainerContent
      name={'Мингаз сегодня'}
      content={
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Мингаз сегодня</Name>
            {company.map((element) => (
              <BlockBtn key={element.id}>
                <DopFunctionalHeader
                  index={element.id}
                  nameCard={element.name}
                  className={currentNewsID === element.router ? 'background' : ''}
                  onClick={() => animate(element.router)}
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
