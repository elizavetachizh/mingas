import { Container } from '../../pages/styles';
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import TitleForHome from '../TitleForHome';
import React from 'react';

export default function LeaveFeedback() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleForHome infoTitle={'Возможность оставить отзыв'} color={'blue'} />
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
          >
            Мингаз на карте Минска — Яндекс Карты
          </a>
        </div>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
