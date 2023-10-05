import React from 'react';

import { DivServices, NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';
import ContainerContent from '../../components/Container';
import { APIimage } from '../../backend';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

export default function Services() {
  const service = useSelector((state) => state.services.data);
  return (
    <ContainerContent
      name={'Услуги жителям столичного региона'}
      content={
        <DivServices>
          {service?.length ? (
            <>
              {links.map((element) => (
                <NavLinkService key={element.idService} to={element.linkService}>
                  <img
                    alt={''}
                    src={require(`../../assets/icons_services/${element.imgService}.png`)}
                  />
                  <Name>{element.nameService}</Name>
                </NavLinkService>
              ))}
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
            <Loader />
          )}
        </DivServices>
      }
    />
  );
}
