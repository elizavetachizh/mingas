import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../../../../../components/header';
import { data } from '../../../../../assets/data/data_department';
import DopFunctional from '../DopFunctional';
import { useParams, useSearchParams } from 'react-router-dom';
import { Container } from '../../../styles';
import { AdditionalDiv } from '../../../../concats/GeneralContactInform/styles';
import Footer from '../../../../../components/footer';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../../assets/png/up_arrow_round.png';
import {
  DivBlocks,
  ContainerInform,
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
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function DepartmentInformation() {
  const { linkId } = useParams();
  const [currentServiceID, setDepartamentId] = useState(null);
  const [inform, setInform] = useState([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (!currentServiceID && !inform.length) {
      const current = data.find((element) => element.idName === +linkId);
      console.log(current);
      setInform(current.information);
      setDepartamentId(+linkId);
    }
  }, [currentServiceID, linkId, inform, id]);

  const currentDepartment = useMemo(
    () =>
      inform.filter((department) =>
        id
          ? department.idNameInform === currentServiceID && department.id === +id
          : department.idNameInform === currentServiceID
      ),

    [inform, id, currentServiceID]
  );
  const changeDepartment = useCallback(
    (departamentId) => {
      const current = data.find((element) => element.idName === departamentId);
      setDepartamentId(departamentId);
      setInform(current.information);
      window.scrollTo(0, 0);
      navigate(`/company/management/${current.idName}`);
    },
    [currentServiceID, inform]
  );
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.idName === descriptionID);
      setInform(current.information);
      setDepartamentId(currentServiceID ? '' : descriptionID);
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
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Наименования подразделений</Name>
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
                    <IoIosArrowUp onClick={() => animate(element.idName)} />
                  ) : (
                    <IoIosArrowDown onClick={() => animate(element.idName)} />
                  )}
                </ContainerBtnIcon>

                <DivOpen className={currentServiceID === element.idName && `shake`}>
                  {inform.map((link) => (
                    <button onClick={() => handlerLinkClickUniqueName(link.id)}>{link.name}</button>
                  ))}
                </DivOpen>
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            {currentDepartment.map((el) => (
              <DopFunctional
                name={el.name}
                contacts={el.contacts}
                schedule={el.schedule}
                photo={el.photo}
                chief={el.chief}
                description={el.description}
              />
            ))}
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      {/*<ScrollToTop showUnder={160}>*/}
      {/*  <img src={up} alt={''} />*/}
      {/*</ScrollToTop>*/}
      <Footer />
    </Container>
  );
}
