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
  const [title, setTitle] = useState('');
  const [inform, setInform] = useState([]);
  const currentDepartment = useMemo(
    () =>
      dataAnswer.filter((department) =>
        questionId
          ? department.titleId === +titleId && department.questionId === +questionId
          : department.titleId === +titleId
      ),
    [dataAnswer, titleId, questionId]
  );
  useEffect(() => {
    const current = dataAnswer.find((element) => element.titleId === +titleId);
     setTitle(current.title)
    console.log(title);
     setInform(current.blockInform);
  });
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <Menu />
          <ContainerInform>
            {titleId && <Name>{title}</Name>}
            <>
              {inform.map((el) => (
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
