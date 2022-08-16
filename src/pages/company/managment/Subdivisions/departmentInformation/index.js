import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../../../../components/header';
import { data } from '../../../../../assets/data/data_department';
import DopFunctional from '../DopFunctional';
import { useParams } from 'react-router-dom';
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
import { BlockBtn, Name } from '../../../../../components/administrativeServices/Header/styles';
import { useNavigate } from 'react-router';

export default function DepartmentInformation() {
  const { linkId } = useParams();
  const [currentServiceID, setDepartamentId] = useState(null);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('Горбач');
  const [chief, setChief] = useState('');
  const [schedule, setSchedule] = useState('');
  const [contacts, setContacts] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentServiceID && !description && !chief && !name && !photo) {
      const current = data.find((element) => element.id === +linkId);
      navigate(`/company/management/${current.id}`);
      setDescription(current.description);
      setChief(current.chief);
      setPhoto(current.photo);
      setSchedule(current.schedule);
      setDepartamentId(+linkId);
      setName(current.name);
      setContacts(current.contacts);
    }
  }, [currentServiceID, description, contacts, schedule, photo, chief, linkId, name]);
  const changeDepartment = useCallback(
    (departamentId) => {
      const current = data.find((element) => element.id === departamentId);
      setDepartamentId(departamentId);
      setDescription(current.description);
      setPhoto(current.photo);
      setChief(current.chief);
      setContacts(current.contacts);
      setSchedule(current.schedule);
      setName(current.name);
    },
    [currentServiceID]
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
                <DopFunctionalHeader
                  nameCard={element.name}
                  className={currentServiceID === element.id ? 'background' : ''}
                  onClick={() => changeDepartment(element.id)}
                  key={element.id}
                />
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{name}</Name>
            <DopFunctional
              photo={photo}
              chief={chief}
              description={description}
              schedule={schedule}
              contacts={contacts}
            />
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
