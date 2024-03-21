import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { ContainerLinks } from '../../pages/company/parentOrganizations/styles';
import LeaveFeedbackMingas from './leaveFeedbackMingas';
import quality from '../../assets/png/quality.png';
import ContainerContent from '../Container';
import { ContainerInform } from '../../pages/feedback/electronicСirculation/styles';
import SubTitleFun from '../SubTitle';
export default function LeaveFeedback() {
  const [src, setSrc] = useState('');
  useEffect(() => {
    QRCode.toDataURL('http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page').then(
      setSrc
    );
  }, []);
  return (
    <ContainerContent
      name={'Возможность оставить отзыв'}
      content={
        <ContainerLinks>
          <div
            style={{
              height: '800px',
              overflow: 'hidden',
              position: 'relative',
            }}
            className={'feedback-yandex'}
          >
            <iframe
              title={'iframe'}
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
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div>
              <a
                href="http://xn----7sbgfh2alwzdhpc0c.xn--90ais/organization/33279/org-page"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  style={{ width: '30%', margin: '0 35%' }}
                  src={quality}
                  className="attachment-full size-full"
                  alt="картинка"
                />
                <p>
                  Портал рейтинговой оценки качества оказания услуг организациями Республики
                  Беларусь
                </p>
              </a>
              <div style={{ textAlign: 'center' }}>
                <img alt="картинка" style={{ width: '40%', margin: '0 30%' }} src={src} />
                *QR-код для перехода на страницу УП "МИНГАЗ" <br /> на портале рейтинговой оценки
              </div>
            </div>
          </div>
          <ContainerInform style={{ margin: '2% auto' }}>
            <SubTitleFun color={'blue'} infoSubTitle={'Форма обратной связи'} />
            <LeaveFeedbackMingas />
          </ContainerInform>
        </ContainerLinks>
      }
    />
  );
}
