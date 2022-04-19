import React from 'react';
import { Subdivision, Title, Text } from '../styles';
import { Container } from '../../styles';
import Header from '../../../../../components/header';
import ModalSubdivision from '../../../../../components/modalWindow/modalSubdivision';
export { data } from '../../../../../assets/data_management';

export default function ProductionTechnicalManagement() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Subdivision>
        <ModalSubdivision></ModalSubdivision>
        <Title>ПРОИЗВОДСТВЕННО-ТЕХНИЧЕСКОЕ УПРАВЛЕНИЕ</Title>
        <Text>
          Производственно-техническое управление (ПТУ) создано 01.09.2015 в результате реорганизации
          штатно-организационной структуры предприятия. Основными задачами управления являются:
          организация всех производственных процессов Организации, начиная от подготовки и выдачи
          технических условий на проектирование объектов газораспределительной системы и
          газопотребления (жилых домов, коммунально-бытовых и промышленных объектов) с учетом
          перспективного развития газификации г. Минска и Минского района, осуществления врезки и
          пуска газа и дальнейшей их эксплуатации; контроль и координация деятельности технических
          служб Организации. Выполнение этой работы требует от руководства ПТУ и специалистов
          высокой координации действий по выполнению принципа PDСА управления качеством: это
          грамотное планирование, ответственное выполнение, своевременный контроль и последующий
          анализ всей производственной деятельности Организации. В состав ПТУ входят: сектор
          перспективного развития, технический сектор, группа менеджмента качества. Вся работа
          коллектива направлена на достижение эффективной организации труда, повышение
          производительности труда и качества продукции, услуг, которые являются главными элементами
          формирования конкурентных преимуществ всей Организации. Руководит
          производственно-техническим управлением начальник ПТУ Яскевич Виталий Владимирович
        </Text>
      </Subdivision>
    </Container>
  );
}
