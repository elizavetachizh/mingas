import React, { useEffect, useState } from 'react';
import { ContainerInform } from '../administrativeServices/InformaationAdministrativeService/styles';
import DopFunctional from '../administrativeServices/InformaationAdministrativeService/DopFunctional';
import ContainerContent from '../Container';
import axios from 'axios';
import { API } from '../../backend';

export default function AdministartiveServicesForLegal() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/administration`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);
  return (
    <ContainerContent
      name={'Административные процедуры для юридических лиц'}
      content={
        <ContainerInform>
            <h3>
                УП «МИНГАЗ» осуществляет административные процедуры в соответствии с{' '}
                <a href={'https://etalonline.by/document/?regnum=h10800433&q_id=5918245'}>
                    Законом Республики Беларусь от 28 октября 2008 г. № 433-З
                </a>{' '}
                «Об основах административных процедур».
            </h3>
          {info.map((el) => {
            if (el.type === '2') {
              return (
                <DopFunctional
                  id={el._id}
                  key={el._id}
                  uniqueName={el.uniqueName}
                  maximumImplementationPeriod={el.maximumImplementationPeriod}
                  certificateValidityPeriod={el.certificateValidityPeriod}
                  boardSize={el.boardSize}
                  documents={el.documents}
                  contactInform={el.contactInform}
                />
              );
            }
          })}
            <div>
                <p>
                    [1] Нумерация административных процедур соответствует нумерации таких
                    административных процедур в перечне административных процедур, осуществляемых
                    государственными органами и иными организациями по заявлениям граждан,
                    утвержденном
                    <a href={'https://etalonline.by/document/?regnum=p31000200&q_id=5917741'}>
                        Указом Президента Республики Беларусь от 26 апреля 2010 г. № 200
                    </a>
                    .
                </p>
                <p>
                    [2] Заявление подается в произвольной форме на белорусском и (или) русском языках
                    и должно содержать:{' '}
                </p>
                <ul>
                    <li>наименование уполномоченного органа, в который подается заявление;</li>
                    <li>
                        сведения о заинтересованном лице: фамилия, собственное имя, отчество (если
                        таковое имеется), место жительства (место пребывания);
                    </li>
                    <li>
                        наименование административной процедуры, за осуществлением которой обращается
                        заинтересованное лицо;
                    </li>
                    <li>
                        перечень документов и (или) сведений (при их наличии), представляемых вместе с
                        заявлением заинтересованного лица;
                    </li>
                    <li>подпись гражданина либо подпись представителя заинтересованного лица.</li>
                </ul>
            </div>
        </ContainerInform>
      }
    />
  );
}
