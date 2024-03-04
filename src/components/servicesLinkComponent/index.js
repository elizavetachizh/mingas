import ContainerContent from '../Container';
import { DivServices, NavLinkService } from '../../pages/services/styles';
import { Name } from '../../pages/services/servicesList/styles';
import { APIimage } from '../../backend';
import Loader from '../Loader';
import React from 'react';
import { useFetchServicesQuery } from '../../redux/services/services';

export default function ServicesLinkComponent({ name, type, linksForServices }) {
  const { data: servicesName } = useFetchServicesQuery();
  return (
    <ContainerContent
      name={name}
      content={
        <DivServices>
          {servicesName?.length ? (
            <>
              {linksForServices}
              {servicesName.map(
                (element) =>
                  element.type === type && (
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
