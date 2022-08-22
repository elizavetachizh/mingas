import { Container } from '../../pages/styles';
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import React, { useCallback, useEffect, useState } from 'react';
import TitleFun from '../title';
import { Div } from '../administrativeServices/InformaationAdministrativeService/styles';
import { DivInput } from '../formQuestion/styles';
import { ContainerLinks } from '../../pages/company/parentOrganizations/styles';

export default function LeaveFeedback() {
  const [data, setData] = useState([]);
  async function getUserAsync() {
    try {
      let response = await fetch(
        `http://xn----7sbgfh2alwzdhpc0c.xn--90ais/api/v1/public/profile/33279`,
        {
          mode: 'no-cors',
        }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
      // Handle errors here
    }
  }

  useEffect(() => {
    getUserAsync()
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Возможность оставить отзыв'} color={'blue'} />
        <ContainerLinks>
          {' '}
          <div
            style={{ width: '560px', height: '800px', overflow: 'hidden', position: 'relative' }}
          >
            <iframe
              style={{
                width: '100%',
                height: '100%',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                boxSizing: 'border-box',
              }}
              src="https://yandex.ru/maps-reviews-widget/41119693302?comments"
            ></iframe>
            <a
              href="https://yandex.by/maps/org/mingaz/41119693302/"
              target="_blank"
              style={{
                boxSizing: 'border-box',
                textDecoration: 'none',
                color: '#b3b3b3',
                fontSize: '10px',
                fontFamily: 'YS Text,sans-serif',
                padding: '0 20px',
                position: 'absolute',
                bottom: '8px',
                width: '100%',
                textAlign: 'center',
                left: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
                maxHeight: '14px',
                whiteSpace: 'nowrap',
              }}
              rel="noreferrer"
            >
              Мингаз на карте Минска — Яндекс Карты
            </a>
          </div>
          <div>
            {' '}
            <a
              href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
              target="_blank"
              rel="noreferrer"
            >
              <img style={{margin:'0 20%'}}
                width="60%"
                height="60%"
                src="https://mingas.by/wp-content/uploads/2019/03/d676007c6bce67133b0ea05bc310ca0e.png"
                className="attachment-full size-full"
                alt=""
              />
              <p>
                Портал рейтинговой оценки качества оказания услуг орагнизациями Республики Беларусь
              </p>
            </a>
          </div>
        </ContainerLinks>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
