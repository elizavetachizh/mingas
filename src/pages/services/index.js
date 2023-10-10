import React from 'react';
import { NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';
import ServicesLinkComponent from '../../components/servicesLinkComponent';

export default function Services() {
  return (
    <ServicesLinkComponent
      type={'1'}
      name={'Услуги жителям столичного региона'}
      linksForServices={links.map((element) => (
        <NavLinkService key={element.idService} to={element.linkService}>
          <img alt={''} src={require(`../../assets/icons_services/${element.imgService}.png`)} />
          <Name>{element.nameService}</Name>
        </NavLinkService>
      ))}
    />
  );
}
