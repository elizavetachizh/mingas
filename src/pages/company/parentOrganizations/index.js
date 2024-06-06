import React from 'react';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { data } from '../../../assets/data/data_ParentOrganization';
import DopFunctional from './DopFunctional';
import { ContainerLinks } from './styles';
export default function ParentOrganizations() {
  return (
      <AdditionalDiv style={{ margin: '4% auto' }}>
        <ContainerLinks>
          {data.map((el) => (
            <DopFunctional
              key={el.cardId}
              img={el.img}
              link={el.link}
              name={el.name}
              info={el.info}
            />
          ))}
        </ContainerLinks>
      </AdditionalDiv>
  );
}
