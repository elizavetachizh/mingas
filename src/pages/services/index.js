import React  from 'react';

import { DivServices, NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';
import ContainerContent from '../../components/Container';
import { APIimage } from '../../backend';
import {  useSelector } from 'react-redux';

export default function Services() {
  const service = useSelector((state) => state.services.data);
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
          {service?.length ? (
            <>
              {service.map(
                (element) =>
                  element.type === '1' && (
                    <NavLinkService key={element._id} to={element._id}>
                      <img alt={''} src={`${APIimage}/${element.image}`} />
                      <Name>{element.name}</Name>
                    </NavLinkService>
                  )
              )}
            </>
          ) : (
            <p>Загрузка данных...</p>
          )}
        </DivServices>
      }
    />
  );
}
