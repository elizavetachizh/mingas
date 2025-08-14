import ContainerContent from '../../components/Container';
import {
  ContainerInform,
  DivBlocks,
  General,
} from '../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../concats/headerContacts/styles';
import { BlockBtn, Name } from '../../components/administrativeServices/Header/styles';
import DopFunctionalHeader from '../services/NaturalGas/DopFunctionalHeader';
import Loader from '../../components/Loader';
import DopFunctionService from '../services/DopFunction';
import React, { useEffect, useState } from 'react';
import { useFetchEcoBoxThemeQuery } from '../../redux/services/ecoBoxTheme';
import { useFetchEcoBoxContentQuery } from '../../redux/services/ecoBoxContent';
import ElementComponent from './elementComponent';

export default function EcoBox() {
  const [theme, setTheme] = useState(null);
  const { data: content, isFetching } = useFetchEcoBoxContentQuery({ theme: theme?._id });
  const { data: themes, isLoading } = useFetchEcoBoxThemeQuery();
  console.log(themes);
  console.log(content);
  useEffect(() => {
    setTheme(themes?.[0]);
  }, [themes]);
  return (
    <ContainerContent
      name={'ECOBOX — ДОМА И БИЗНЕС-ОБЪЕКТЫ ИЗ МОРСКИХ КОНТЕЙНЕРОВ'}
      content={
        <DivBlocks>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {' '}
              <HeaderCompanyDiv>
                <Name>Наименование раздела</Name>
                {themes?.map((element) => (
                  <BlockBtn key={element._id}>
                    <DopFunctionalHeader
                      nameCard={element.title}
                      className={theme?._id === element._id ? 'background' : ''}
                      onClick={() => setTheme(element)}
                    />
                  </BlockBtn>
                ))}
              </HeaderCompanyDiv>
              <ContainerInform>
                <Name>{theme?.title}</Name>
                {isFetching ? (
                  <Loader />
                ) : (
                  <>
                    {content?.map((el, index) =>
                      el?.name === 'Основное' ? (
                        <General>
                          <p dangerouslySetInnerHTML={{ __html: el.description }} />
                        </General>
                      ) : (
                        <ElementComponent
                          classname={'question-answer'}
                          key={index}
                          nameDescription={el.name}
                          inform={el.description}
                          additionalProps={el?.price}
                        />
                      )
                    )}
                  </>
                )}
              </ContainerInform>
            </>
          )}
        </DivBlocks>
      }
    />
  );
}
