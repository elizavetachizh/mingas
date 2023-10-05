import React from 'react';
import { DivServices, NavLinkService } from '../styles';
import ContainerContent from '../../../components/Container';

import { APIimage } from '../../../backend';
import { Name } from '../servicesList/styles';
import { useSelector } from 'react-redux';
import Loader from "../../../components/Loader";

export default function ServicesForLegalEntities() {
  const service = useSelector((state) => state.services.data);

  return (
    <ContainerContent
      name={'Услуги для бизнеса'}
      content={
        <DivServices>
          {service?.length ? (
            <>
              {service.map(
                (element) =>
                  element.type === '2' && (
                    <NavLinkService key={element._id} to={element._id}>
                      <img alt={''} src={`${APIimage}/${element.image}`} />
                      <Name>{element.name}</Name>
                    </NavLinkService>
                  )
              )}
            </>
          ) : (
            <Loader/>
          )}
        </DivServices>
      }
    />
  );
}
