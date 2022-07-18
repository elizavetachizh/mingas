import React, { useCallback, useEffect, useState } from 'react';
import { PageSection, Table, Tbody, Tr, Td, AdditionalDiv } from './styles';
import Header from '../../../components/header';
import { ContactsInform, DivButtons, DivMap, Row } from '../styles';
import HeaderConcats from '../headerContacts';
import { Title } from '../../Home/useful_information/styles';
import AutoComplete from '../../../components/GoogleMap/AutoComplete';
import Map, { MODES } from '../../../components/GoogleMap';
import Footer from '../../../components/footer';
import { Container } from '../../styles';
import { useJsApiLoader } from '@react-google-maps/api';
import { defaultCenter, GetBrowserLocation } from '../../../components/GoogleMap/utilsGeo';
import TitleFun from '../../../components/title';

const API_KEY = process.env.REACT_APP_API_KEY;

export const styleTd = {
  width: '50%',
  fontWeight: 'bold',
};
const libraries = ['places'];

export default function GeneralInform() {
  const [center, setCenter] = useState(defaultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script-1',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode]);

  const onMarkerAdd = useCallback(
    (coordinates) => {
      setMarkers([...markers, coordinates]);
    },
    [markers]
  );

  const clear = useCallback(() => {
    setMarkers([]);
  }, []);

  useEffect(() => {
    GetBrowserLocation()
      .then((curLoc) => {
        setCenter(curLoc);
      })
      .catch((defaultLocation) => {
        setCenter(defaultLocation);
      });
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'АППАРАТ УПРАВЛЕНИЯ УП "МИНГАЗ"'} />
        <Row>
          <HeaderConcats />
          <ContactsInform>
            <PageSection>
              <Table>
                <Tbody>
                  <Tr>
                    <Td style={styleTd}>Адрес</Td>
                    <Td>220037, г.Минск, ул.Ботаническая, 11/1</Td>
                  </Tr>
                  <Tr>
                    <Td style={styleTd}>Телефон (приёмная руководителя)</Td>
                    <Td>(017) 299-28-80</Td>
                  </Tr>
                  <Tr>
                    <Td style={styleTd}>E-mail</Td>
                    <Td>root@mingas.by</Td>
                  </Tr>
                  <Tr>
                    <Td style={styleTd}>Факс</Td>
                    <Td>(017) 366-36-33</Td>
                  </Tr>
                </Tbody>
              </Table>
            </PageSection>
          </ContactsInform>
        </Row>
      </AdditionalDiv>

      <DivMap>
        <AutoComplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        <DivButtons>
          <button
            // href={'/'}
            // backgroundColor={'blue'}
            // infoButton={'Установить маркер'}
            onClick={toggleMode}
          >
            Установить маркер
          </button>
          <button
            // href={'/'}
            // backgroundColor={'blue'}
            // infoButton={'Очистить маркер'}
            onClick={clear}
          >
            Очистить маркер
          </button>
        </DivButtons>
        {isLoaded ? (
          <Map center={center} mode={mode} markers={markers} onMarkerAdd={onMarkerAdd} />
        ) : (
          <h2>Loading...</h2>
        )}
      </DivMap>
      <Footer />
    </Container>
  );
}
