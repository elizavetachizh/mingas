import { Container } from '../../pages/styles';
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import React, { useCallback, useEffect, useState } from 'react';
import TitleFun from '../title';

console.log('http://www.portal.nalog.gov.by/grp/getData?unp=100582333&charset=UTF-8&type=json');
export default function LeaveFeedback() {
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(
      'http://www.portal.nalog.gov.by/grp/getData?unp=100582333'
    );
    return await response.json();
  }, []);

  useEffect(() => {
    getData()
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'Возможность оставить отзыв'} color={'blue'} />
        <div style={{ width: '560px', height: '800px', overflow: 'hidden', position: 'relative' }}>
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
            Мингаз на карте Минска — Яндекс Карты
          </a>
        </div>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
