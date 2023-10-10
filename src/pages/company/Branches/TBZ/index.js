import React from 'react';
import SchemaOfBranches from '../ChemaOfBranches';
import imageContent from '../../../../assets/Bubni/background1.webp';
import { useFetchOgonekQuery } from '../../../../redux/services/ogonek';

export default function TBZ() {
  const { data: infoTbz } = useFetchOgonekQuery({ typeBranch: 'тбз' });
  return (
    <SchemaOfBranches
      name={'Филиал «Торфобрикетный завод «Сергеевичское»'}
      background={imageContent}
      info={infoTbz}
      carta={
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.by/maps/org/sergeyevichskoye_filial_up_mingaz/124704103181/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
          >
            Сергеевичское, филиал УП Мингаз
          </a>
          <a
            href="https://yandex.by/maps/29630/minsk-district/category/gas_supply_services/184108297/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
          >
            Служба газового хозяйства в Минской области
          </a>
          <iframe
            title={'name'}
            src="https://yandex.by/map-widget/v1/-/CCURZ-WzpC"
            width="100%"
            height="400"
            allowFullScreen={true}
            style={{ position: 'relative' }}
          />
        </div>
      }
    />
  );
}
