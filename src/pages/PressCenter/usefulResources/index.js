import { ContainerArticles } from '../styles';
import SchemaSMI from '../SMI/schema';
import Loader from '../../../components/Loader';
import React, { useEffect, useState } from 'react';
import { API } from '../../../backend';
import axios from 'axios';

export default function UsefulResources() {
  const [info, setInfo] = useState(null);
  useEffect(() => {
    const apiUrl = `${API}/useful_resources`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  return (
    <div style={{ marginTop: '1rem' }}>
      <ContainerArticles>
        {info?.length ? (
          <>
            {info?.map((el) => (
              <SchemaSMI
                href={el.link ? el.link : `/useful-resources/${el._id}`}
                src={el.image}
                content={el.name}
                date={el.date}
              />
            ))}
          </>
        ) : (
          <Loader />
        )}
      </ContainerArticles>
    </div>
  );
}
