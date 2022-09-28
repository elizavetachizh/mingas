import { Container } from '../../../styles';
import Header from '../../../../../components/header';
import Footer from '../../../../../components/footer';
import { AdditionalDiv } from '../../../../concats/GeneralContactInform/styles';
import React, { useEffect, useState } from 'react';
import { data } from '../../../../../assets/data/data_department';
import DopFunctional from '../DopFunctional';
import {
  BlockSearchService,
  ContainerInform,
} from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../../assets/png/up_arrow_round.png';
import { NavLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';

export default function AllSubdivisions() {
  const [isForm, setIsForm] = useState(false);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const infoForSearch = data[0].information
    .concat(data[1].information)
    .concat(data[2].information)
    .concat(data[3].information)
    .concat(data[4].information)
    .concat(data[5].information)
    .concat(data[6].information)
    .concat(data[7].information);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

  infoForSearch.map((card) => {
    if (typeof card.name === 'string') {
      if (card.name.includes(message)) {
        result.push(card);
      }
    }
  });
  const renderResult = () => {
    return (
      <BlockSearchService>
        {result.length ? (
          result.map((element) => {
            return (
              <div>
                <NavLink style={{ margin: '20px auto' }} to={`${pathname}?id=${element.id}`}>
                  {element.name}
                </NavLink>
              </div>
            );
          })
        ) : (
          <p>К сожалению, такого отдела найти не удалось</p>
        )}
      </BlockSearchService>
    );
  };
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsForm(false);
    setMessage('');
    setInfo(infoForSearch);
    navigate('/company/management/1');
  };
  return (
    <Container>
      <Header />
      <AdditionalDiv>
        <ContainerInform>
          <>
            {/*{isForm ? (*/}
            {/*  <IoIosSearch style={{ display: 'none' }} />*/}
            {/*) : (*/}
            {/*  <SearchService style={{ width: '100%' }} onClick={() => handleForm()}>*/}
            {/*    <p>Поиск по отделам</p>*/}
            {/*    <IoIosSearch*/}
            {/*      style={{ height: '30px', width: '30px' }}*/}
            {/*      color={'#0d4475'}*/}
            {/*      type={'submit'}*/}
            {/*    />*/}
            {/*  </SearchService>*/}
            {/*)}*/}
            {/*{isForm && (*/}
            {/*  <ContainerFormSearchForService style={{ margin: '4% auto' }}>*/}
            {/*    <form action={'search'}>*/}
            {/*      <input*/}
            {/*        placeholder="Введите название отдела"*/}
            {/*        onChange={handleChange}*/}
            {/*        type={'text'}*/}
            {/*      />*/}
            {/*      <IoMdClose*/}
            {/*        style={{ width: '60px' }}*/}
            {/*        color={'black'}*/}
            {/*        onClick={handleInsideClick}*/}
            {/*      />*/}
            {/*    </form>*/}
            {/*  </ContainerFormSearchForService>*/}
            {/*)}*/}
            {/*{message && renderResult()}*/}
            {infoForSearch.map((el) => (
              <DopFunctional
                key={el.name}
                name={el.name}
                contacts={el.contacts}
                schedule={el.schedule}
                photo={el.photo}
                chief={el.chief}
                description={el.description}
              />
            ))}
          </>
        </ContainerInform>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
