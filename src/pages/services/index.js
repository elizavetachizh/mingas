import React, { useEffect, useState } from 'react';

import { DivServices, NavLinkService } from './styles';
import { links } from '../../assets/data/liksForServices';
import { Name } from './servicesList/styles';
import ContainerContent from '../../components/Container';
import axios from 'axios';
import { API, APImage } from '../../backend';

export default function Services() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        {
          console.log(e);
        }
      });
  }, [setData]);
  return (
    <ContainerContent
      name={'Услуги жителям столичного региона'}
      content={
        <DivServices>
          {/*{links.map((element) => (*/}
          {/*  <NavLinkService key={element.idService} to={element.linkService}>*/}
          {/*    <img*/}
          {/*      alt={''}*/}
          {/*      src={require(`../../assets/icons_services/${element.imgService}.png`)}*/}
          {/*    />*/}
          {/*    <Name>{element.nameService}</Name>*/}
          {/*  </NavLinkService>*/}
          {/*))}*/}
          {data.map((element) => {
            if (element.type === '1') {
              return (
                <NavLinkService key={element._id} to={element._id}>
                  <img alt={''} src={`${APImage}/public/images/${element.image}`} />
                  <Name>{element.name}</Name>
                </NavLinkService>
              );
            }
          })}
        </DivServices>
      }
    />
  );
}
