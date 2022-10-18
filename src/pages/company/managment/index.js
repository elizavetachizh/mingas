import React, { useCallback, useEffect, useState, lazy, Suspense } from 'react';
import { t } from 'i18next';
import photoHistory from '../../../assets/management/0.webp';
import { DivLeadersPhotoPosition } from './styles';
import { DivText, DivTextPhoto, ImageDiv } from '../history/styles';
import { management } from '../../../assets/data/data_management';
import Modal from '../../../components/modalWindow';
import Aos from 'aos';
import SchemaCompany from '../SchemaCompany';
const renderLoader = () => <p>Загрузка данных...</p>;
const Leaders = lazy(() => import('./divmagement'));
export default function Management() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const [nameId, setNameId] = useState(null);
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
    setNameId(leader.id);
  }, []);

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <SchemaCompany
      name={'Руководство'}
      content={
        <>
          {' '}
          <DivTextPhoto>
            <ImageDiv data-aos={'fade-up'} src={photoHistory} />
            <DivText data-aos={'fade-up'}>
              <p>{t('management:text1')}.</p>
              <p>{t('management:text2')}</p>
              <p>{t('management:text3')}.</p>
              <p>{t('management:text4')}.</p>
            </DivText>
          </DivTextPhoto>
          <DivLeadersPhotoPosition>
            <Suspense fallback={renderLoader()}>
              {management.map((element) => (
                <Leaders
                  idName={element.id}
                  handlerLeaderClick={handlerLeaderClick}
                  cardImg={element.cardImg}
                  leader={element}
                  key={element.id}
                  fullName={element.fullName}
                  position={element.position}
                />
              ))}
            </Suspense>
          </DivLeadersPhotoPosition>
          {isModalVisible && (
            <Modal
              index={nameId}
              handleCloseCLick={handleCloseCLick}
              currentLeader={currentLeader}
              nameId={nameId}
            />
          )}
        </>
      }
    />
  );
}
