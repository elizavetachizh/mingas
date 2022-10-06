import React from 'react';

import { DivServices, NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';
import ContainerContent from '../../components/Container';

export default function Services() {
  return (
    <ContainerContent
      name={'Услуги жителям столичного региона'}
      content={
        <DivServices>
          {links.map((element) => (
            <NavLinkService key={element.idService} to={element.linkService}>
              <img
                alt={''}
                src={require(`../../assets/icons_services/${element.imgService}.png`)}
              />
              <Name>{element.nameService}</Name>
            </NavLinkService>
          ))}
        </DivServices>
      }
    />
  );
}
