import React, { useEffect, useState } from 'react';
import '../../../components/Content/slider.css';
import axios from 'axios';
import { API } from '../../../backend';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';
import Articles from './articles';

export default function ContentHome() {
  const isPhone = useMediaQuery('(max-width: 900px)');
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <>{isPhone ? <ContentMobile info={info} /> : <Articles info={info} />}</>;
}
