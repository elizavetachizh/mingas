import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../../../../../components/header';
import { data } from '../../../../../assets/data/data_department';
import DopFunctional from '../DopFunctional';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import { Container } from '../../../styles';
import { AdditionalDiv } from '../../../../concats/GeneralContactInform/styles';
import Footer from '../../../../../components/footer';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../../assets/png/up_arrow_round.png';
import {
  DivBlocks,
  ContainerInform,
  SearchService,
  ContainerFormSearchForService,
  BlockSearchService,
} from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../../../concats/headerContacts/styles';
import DopFunctionalHeader from '../../../../services/NaturalGas/DopFunctionalHeader';
import {
  BlockBtn,
  ContainerBtnIcon,
  DivOpen,
  Name,
} from '../../../../../components/administrativeServices/Header/styles';
import { useLocation, useNavigate } from 'react-router';
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch, IoMdClose } from 'react-icons/io';
import useMediaQuery from '../../../../Home/parallax/useMediaQuery';

export default function DepartmentInformation() {
  const { linkId } = useParams();
  const isPhone = useMediaQuery('(max-width: 800px)');
  const [currentServiceID, setDepartamentId] = useState(null);
  const [inform, setInform] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [info, setInfo] = useState([]);
  const currentSearch = useMemo(() => data.find((element) => element.idName === +linkId), [linkId]);

  const infoForSearch = data[0].information
    .concat(data[1].information)
    .concat(data[2].information)
    .concat(data[3].information)
    .concat(data[4].information)
    .concat(data[5].information)
    .concat(data[6].information)
    .concat(data[7].information);

  useEffect(() => {
    if ((!inform.length || !inform) && !currentServiceID) {
      const current = data.find((element) => element.idName === +linkId);
      setInform(current.information);
      setDepartamentId(+linkId);
    }
    if (id) {
      const currentBlockInfo = infoForSearch.filter((information) => information.id === +id);
      setInfo(currentBlockInfo);
    } else {
      setInfo(currentSearch?.information);
    }
  }, [currentServiceID, linkId, inform, id, currentSearch]);

  const currentDepartment = useMemo(
    () =>
      inform.filter((department) =>
        id
          ? department.idNameInform === +currentServiceID && department.id === +id
          : department.idNameInform === +currentServiceID
      ),

    [inform, id, currentServiceID]
  );
  const changeDepartment = useCallback(
    (departamentId) => {
      const current = data.find((element) => element.idName === departamentId);
      navigate(`/company/management/${current.idName}`);
      setDepartamentId(departamentId);
      setInform(current.information);
      window.scrollTo(0, 0);
    },
    [currentServiceID]
  );

  const handlerLinkClickUniqueName = useCallback(
    (id) => {
      navigate(`${pathname}?id=${id}`);
      window.scrollTo(0, 0);
    },
    [pathname]
  );

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
    setInfo(currentSearch?.information);
    navigate('/company/management/1');
  };
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименования подразделений</Name>
            {isForm ? (
              <IoIosSearch style={{ display: 'none' }} />
            ) : (
              <SearchService style={{ width: '100%' }} onClick={() => handleForm()}>
                <p>Поиск по отделам</p>
                <IoIosSearch
                  style={{ height: '30px', width: '30px' }}
                  color={'#0d4475'}
                  type={'submit'}
                />
              </SearchService>
            )}
            {isForm && (
              <ContainerFormSearchForService style={{ margin: '4% auto' }}>
                <form action={'search'}>
                  <input
                    placeholder="Введите название отдела"
                    onChange={handleChange}
                    type={'text'}
                  />
                  <IoMdClose
                    style={{ width: '60px' }}
                    color={'black'}
                    onClick={handleInsideClick}
                  />
                </form>
              </ContainerFormSearchForService>
            )}
            {message && renderResult()}
            {data.map((element) => (
              <BlockBtn>
                <ContainerBtnIcon>
                  <DopFunctionalHeader
                    nameCard={element.fullName}
                    className={currentServiceID === element.idName ? 'background' : ''}
                    onClick={() => changeDepartment(element.idName)}
                    key={element.idName}
                  />
                  {currentServiceID === element.idName ? (
                    <IoIosArrowUp onClick={() => changeDepartment(element.idName)} />
                  ) : (
                    <IoIosArrowDown onClick={() => changeDepartment(element.idName)} />
                  )}
                </ContainerBtnIcon>

                <DivOpen className={currentServiceID === element.idName && `shake`}>
                  {inform.map((link) => (
                    <button
                      onClick={() => handlerLinkClickUniqueName(link.id)}
                      key={link.id}
                      className={+id === +link.id ? 'shake' : ''}
                    >
                      {link.name}
                    </button>
                  ))}
                </DivOpen>
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            {isPhone ? (
              <>
                {inform.map((el) => (
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
            ) : (
              <>
                {info.length &&
                  info.map((el) => (
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
            )}
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
