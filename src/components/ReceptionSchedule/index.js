import { ContainerTable } from '../../pages/feedback/receptionOfCitizens/styles';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../backend';

export default function ReceptionSchedule() {
  const [table, setTable] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/table`)
      .then((res) => {
        setTable(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setTable]);
  useEffect(() => {
    const element = document.getElementById('table');
    element.innerHTML = table[0]?.name;
  }, [table]);

  return <ContainerTable id={'table'} />;
}
