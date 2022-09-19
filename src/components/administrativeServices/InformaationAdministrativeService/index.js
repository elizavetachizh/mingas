import { NavLink, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { data } from '../../../assets/data/dataInformAdministrativeService';
import DopFunctional from './DopFunctional';
import Header from '../../header';
import Footer from '../../footer';
import { AdditionalDiv } from '../../../pages/concats/GeneralContactInform/styles';
import {
  DivBlocks,
  ContainerInform,
  BlockSearch,
  SearchService,
  ContainerFormSearchForService,
  BlockSearchService,
} from './styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { Container } from '../../../pages/company/styles';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router';
import Feedback from "../../../pages/feedback";
import minsk from "../../../assets/background/phone.jpg";

export default function InformationAdministrativeService() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const linkId = searchParams.get('linkId');
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (linkId) {
      const currentBlockInfo = data?.filter((blockInfo) => blockInfo.linkId === +linkId);
      setInfo(currentBlockInfo);
    } else {
      setInfo(data);
    }
  }, [data, linkId]);
  const [isForm, setIsForm] = useState(false);
  const handleForm = () => {
    setIsForm(true);
    if (isForm) {
      setIsForm(false);
    }
  };
  const [message, setMessage] = useState('');
  const result = [];

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  {
    data.map((card) => {
      if (card.uniqueName.includes(message)) {
        result.push(card);
      }
    });
  }

  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div>
                {' '}
                <NavLink
                  style={{ margin: '20px auto' }}
                  to={`${pathname}?linkId=${element.linkId}`}
                >
                  {element.uniqueName}
                </NavLink>
              </div>
            );
          })
        ) : (
          <p>К сожалению, такой процедуры найти не удалось</p>
        )}
      </BlockSearchService>
    );
  };
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    setInfo(data);
    navigate('/services/administrative-services');
  };
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Административные услуги'} />
      <AdditionalDiv>
        <BlockSearch>
          {isForm ? (
            <IoIosSearch style={{ display: 'none' }} />
          ) : (
            <SearchService onClick={() => handleForm()}>
              <p>Поиск по административным услугам</p>
              <IoIosSearch
                style={{ height: '30px', width: '30px' }}
                color={'#0d4475'}
                type={'submit'}
              />
            </SearchService>
          )}
          {isForm && (
            <ContainerFormSearchForService>
              <form action={'search'}>
                <input
                  placeholder="Введите название административной процедуры"
                  onChange={handleChange}
                  type={'text'}
                />
                <IoMdClose style={{ width: '60px' }} color={'black'} onClick={handleInsideClick} />
              </form>
            </ContainerFormSearchForService>
          )}
          {message && renderResult()}
        </BlockSearch>
        <DivBlocks>
          <ContainerInform>
            {info.map((el) => (
              <DopFunctional
                key={el.uniqueName}
                uniqueName={el.uniqueName}
                maximumImplementationPeriod={el.maximumImplementationPeriod}
                certificateValidityPeriod={el.certificateValidityPeriod}
                boardSize={el.boardSize}
                documents={el.documents}
                contactInform={el.contactInform}
              />
            ))}
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
