import { Parallax } from 'react-parallax';
import { Container } from '../../styles';
import React, { useCallback, useEffect, useState } from 'react';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import {
  ContainerInform,
  Div,
  DivBlocks,
  General,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { DescriptionService } from '../../../services/DopFunction/styles';
import { Text } from '../../../Home/Content/styles';
import { Main, WindowDiv } from '../../../Home/slider/styles';
import { ContainerParallax } from '../styles';
import Loader from '../../../../components/Loader';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import { BlockBtn, Name } from '../../../../components/administrativeServices/Header/styles';
import DopFunctionalHeader from '../../../services/NaturalGas/DopFunctionalHeader';

const HtmlRenderer = ({ html }) => {
  return <DescriptionService dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function SchemaOfBranches({ name, background, carta, info, isLoading }) {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const animate = useCallback((el) => {
    setId(el._id);
    setContent(el.content);
    setTitle(el.title);
  }, []);

  useEffect(() => {
    if (info?.length) {
      setId(info[0]?._id);
      setContent(info[0]?.content);
      setTitle(info[0]?.title);
    }
  }, [info]);

  return (
    <Container>
      <Header />
      <ContainerParallax>
        <Parallax style={{ height: '450px' }} bgImage={background} strength={-200}>
          <Main className={'branches'}>
            <WindowDiv>
              <Text style={{ textAlign: 'center' }}>{name}</Text>
            </WindowDiv>
          </Main>
        </Parallax>
      </ContainerParallax>
      <AdditionalDiv style={{ margin: '4rem auto' }}>
        {' '}
        <DivBlocks>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <HeaderCompanyDiv>
                <Name>Наименование раздела</Name>
                {info?.map((element) => (
                  <BlockBtn key={element._id}>
                    <DopFunctionalHeader
                      nameCard={element.title}
                      className={id.toString() === element._id ? 'background' : ''}
                      onClick={() => animate(element)}
                    />
                  </BlockBtn>
                ))}
              </HeaderCompanyDiv>
              <ContainerInform>
                <Name>{title}</Name>
                <General>
                  <Div className={`shake`}>
                    <HtmlRenderer html={content} />
                  </Div>
                </General>
              </ContainerInform>
            </>
          )}
        </DivBlocks>
      </AdditionalDiv>

      <General style={{ borderRadius: 'none', border: 'none' }} className={'leave-feedback'}>
        {carta}
      </General>

      <Footer />
    </Container>
  );
}
