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
import React, { useEffect, useState } from 'react';
import { useFetchEcoBoxThemeQuery } from '../../redux/services/ecoBoxTheme';
import { useFetchEcoBoxContentQuery } from '../../redux/services/ecoBoxContent';
import ElementComponent from './elementComponent';
import useMediaQuery from '../Home/parallax/useMediaQuery';
import EcoBoxForm from './form';

export default function EcoBox() {
  const isPhone = useMediaQuery('(max-width: 820px)');
  const [theme, setTheme] = useState(null);
  const { data: content, isFetching } = useFetchEcoBoxContentQuery({ theme: theme?._id });
  const { data: themes, isLoading } = useFetchEcoBoxThemeQuery();

  useEffect(() => {
    if (!isPhone) setTheme(themes?.[themes?.length - 1]);
  }, [isPhone, themes]);

  return (
    <ContainerContent
      name={'ECOBOX — ДОМА И БИЗНЕС-ОБЪЕКТЫ ИЗ МОРСКИХ КОНТЕЙНЕРОВ'}
      content={
        <DivBlocks>
          {isLoading ? (
            <Loader />
          ) : isPhone ? (
            [...themes]?.reverse()?.map((theme, key) => (
              <ContainerInform key={key}>
                <Name>{theme?.title}</Name>
                {isFetching ? (
                  <Loader />
                ) : (
                  content?.map(
                    (element, index) =>
                      element?.theme?._id === theme?._id && (
                        <>
                          {element?.name === 'Основное' ? (
                            <General>
                              <p dangerouslySetInnerHTML={{ __html: element.description }} />
                            </General>
                          ) : (
                            <ElementComponent
                              classname={'question-answer'}
                              key={index}
                              nameDescription={element.name}
                              inform={element.description}
                              additionalProps={element?.price}
                              images={element?.images}
                              isPhone={isPhone}
                            />
                          )}
                          {theme?.title ===
                            'ECOBOX — ДОМА И БИЗНЕС-ОБЪЕКТЫ ИЗ МОРСКИХ КОНТЕЙНЕРОВ' && (
                            <EcoBoxForm />
                          )}
                        </>
                      )
                  )
                )}
              </ContainerInform>
            ))
          ) : (
            <>
              <HeaderCompanyDiv>
                <Name>Наименование раздела</Name>
                {[...themes]?.reverse().map((element, key) => (
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
                          images={el?.images}
                        />
                      )
                    )}

                    {theme?.title === 'ECOBOX — ДОМА И БИЗНЕС-ОБЪЕКТЫ ИЗ МОРСКИХ КОНТЕЙНЕРОВ' && (
                      <EcoBoxForm />
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
