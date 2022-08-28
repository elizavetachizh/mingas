import { Container } from '../../../company/styles';
import Header from '../../../../components/header';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { Name } from '../../../../components/administrativeServices/Header/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../assets/png/up_arrow_round.png';
import Footer from '../../../../components/footer';
import React, { useEffect, useMemo, useState } from 'react';
import Menu from '../Menu';
import { useParams, useSearchParams } from 'react-router-dom';
import { dataAnswer } from '../../../../assets/data/question-answer';
import DopFunctionService from '../../../services/DopFunction';

export default function Information() {
  const { titleId } = useParams();
  const [searchParams] = useSearchParams();
  const questionId = searchParams.get('questionId');
  const [info, setInfo] = useState([]);
  const currentTheme = useMemo(
    () => dataAnswer.find((element) => element.titleId === +titleId),
    [titleId]
  );

  useEffect(() => {
    if (questionId) {
      const currentBlockInfo = currentTheme?.blockInform.filter(
        (blockInfo) => blockInfo.questionId === +questionId
      );
      setInfo(currentBlockInfo);
    } else {
      setInfo(currentTheme?.blockInform);
    }
  }, [currentTheme, questionId]);

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <Menu />
          <ContainerInform>
            {titleId && <Name>{currentTheme?.title}</Name>}
            <>
              {info.length &&
                info.map((el) => (
                  <DopFunctionService
                    key={el.questionId}
                    inform={el.answer}
                    nameDescription={el.question}
                  />
                ))}
            </>
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
