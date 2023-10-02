import React, { useEffect, useState } from 'react';
import { DivServices, NavLinkService } from '../styles';
import ContainerContent from '../../../components/Container';
import axios from 'axios';
import { API, APIimage } from '../../../backend';
import { Name } from '../servicesList/styles';

export default function ServicesForLegalEntities() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setData]);

  return (
    <ContainerContent
      name={'Услуги для бизнеса'}
      content={
        <DivServices>
          {data?.length ? (
            <>
              {data.map(
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
            <p>Загрузка данных...</p>
          )}
        </DivServices>
      }
    />
  );
}
