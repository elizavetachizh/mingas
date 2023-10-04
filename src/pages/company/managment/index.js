import React, { useCallback, useEffect, useState, lazy, Suspense } from 'react';
import { DivLeadersPhotoPosition } from './styles';
import { DivText, DivTextPhoto, ImageDiv } from '../history/styles';
import Modal from '../../../components/modalWindow';
import Aos from 'aos';
import SchemaCompany from '../SchemaCompany';
import { useFetchManagementQuery } from '../../../redux/services/management';
const renderLoader = () => <p>Загрузка данных...</p>;
const Leaders = lazy(() => import('./divmagement'));
export default function Management() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const [nameId, setNameId] = useState(null);
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
    setNameId(leader._id);
  }, []);

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, []);

  const { data: management } = useFetchManagementQuery();

  return (
    <SchemaCompany
      name={'Руководство'}
      content={
        <>
          <DivTextPhoto>
            <ImageDiv
              data-aos={'fade-up'}
              src={'https://back.mingas.by/public/images/management/0.webp'}
            />
            <DivText data-aos={'fade-up'}>
              <p>
                Добро пожаловать на корпоративный сайт производственного республиканского унитарного
                предприятия «МИНГАЗ». Основная задача предприятия — обеспечение безопасной и
                бесперебойной подачи природного и сжиженного газа потребителям.
              </p>
              <p>
                Перед коллективом организации стоит задача, наряду с обеспечением безопасности, в
                течение ближайших лет широко развернуть газификацию природным газом районов
                индивидуальной застройки, деревень, поселков Минского района.
              </p>
              <p>
                УП «МИНГАЗ» постоянно меняет стареющее оборудование, внедряет современные системы
                контроля за режимами газораспределения по всем категориям потребителей, применяет
                энергосберегающие технологии.
              </p>
              <p>
                В будущее УП «МИНГАЗ» смотрит с оптимизмом. Отношения с потребителями и партнерами
                строятся на основе уважения и порядочности, взаимной поддержки. Молодой и энергичный
                коллектив предприятия достойно несёт опыт старшего поколения, совершенствует систему
                обеспечения газом нашей столицы, внося тем самым свою лепту в процветание и прогресс
                Республики Беларусь.
              </p>
            </DivText>
          </DivTextPhoto>
          <DivLeadersPhotoPosition>
            <Suspense fallback={renderLoader()}>
              {management?.length ? (
                <>
                  {management.map((element) => (
                    <Leaders
                      idName={element._id}
                      handlerLeaderClick={handlerLeaderClick}
                      cardImg={element.image}
                      leader={element}
                      key={element._id}
                      fullName={element.fullName}
                      position={element.position}
                    />
                  ))}
                </>
              ) : (
                <p>Загрузка данных...</p>
              )}
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
