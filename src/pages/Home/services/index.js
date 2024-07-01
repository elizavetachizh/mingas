import React from 'react';
import ButtonFun from '../../../components/button';
import { DivDown, ButtonServicesHome } from './styles';
import LinkServices from './dataComponents';
import TitleForHome from '../../../components/TitleForHome';
import Loader from '../../../components/Loader';
import { useFetchServicesQuery } from '../../../redux/services/services';
import { BlockContainerRequests } from '../../feedback/styles';

export default function HomeServices() {
  const { data: servicesName } = useFetchServicesQuery();
  return (
    <BlockContainerRequests>
      <TitleForHome
        color={'blue'}
        infoTitle={'Услуги республиканского унитарного предприятия "Мингаз"'}
      />
      {servicesName?.length ? (
        <ButtonServicesHome>
          <div>
            <ButtonFun
              href={'/services'}
              backgrounder={'blue'}
              infoButton={'Жителям столичного региона'}
            />
            <DivDown>
              {servicesName
                .slice(0, 4)
                .map(
                  (element) =>
                    element.type === '1' && (
                      <LinkServices
                        key={element._id}
                        cardId={element._id}
                        nameCard={element.name}
                        link={'services'}
                      />
                    )
                )}
            </DivDown>
          </div>
          <div>
            <ButtonFun
              href={'/services-legal-entities'}
              backgrounder={'blue'}
              infoButton={'Для бизнеса'}
            />
            <DivDown>
              {servicesName
                .slice(-7, -3)
                .map(
                  (element) =>
                    element.type === '2' && (
                      <LinkServices
                        link={'services-legal-entities'}
                        key={element._id}
                        cardId={element._id}
                        nameCard={element.name}
                      />
                    )
                )}
            </DivDown>
          </div>
        </ButtonServicesHome>
      ) : (
        <Loader />
      )}
    </BlockContainerRequests>
  );
}
