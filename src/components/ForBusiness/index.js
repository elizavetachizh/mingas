import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { DivServices } from '../../pages/services/styles';
import { linksForBusiness } from '../../assets/data/linksForBusines';
import ServicesList from '../../pages/services/servicesList';
import ContainerContent from '../Container';
import axios from 'axios';
import { API } from '../../backend';
import {
  DivInformService,
  DivServicesList,
  Image,
  Name,
} from '../../pages/services/servicesList/styles';

export default function ForBusiness() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios(`${API}/business-tabs`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  return (
    <ContainerContent
      name={'Для бизнеса'}
      content={
        <DivServices>
          {info?.map((element) => (
            // <ServicesList
            //   onClick={() => navigate(element.link)}
            //   key={element.id}
            //   serviceId={element.id}
            //   imgCard={element.image}
            //   nameCard={element.name}
            // />
            <DivServicesList onClick={() => navigate(element.link)}>
              <Image alt={''} src={element.image} />
              <DivInformService>
                <Name>{element.name}</Name>
              </DivInformService>
            </DivServicesList>
          ))}
        </DivServices>
      }
    />
  );
}
