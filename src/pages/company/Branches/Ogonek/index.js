import SchemaOfBranches from '../ChemaOfBranches';
import background from '../../../../assets/Ogonek/background.webp';
import React from 'react';
import { useFetchOgonekQuery } from '../../../../redux/services/ogonek';

export default function Ogonek() {
  const { data: infoOgonek } = useFetchOgonekQuery({ typeBranch: 'огонек' });
  return (
    <SchemaOfBranches
      name={'Оздровительный комплекс Огонек'}
      background={background}
      info={infoOgonek}
      carta={
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <a
            href="https://yandex.by/maps/org/ok_ogonek/186976543464/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
          >
            ОК Огонек
          </a>
          <a
            href="https://yandex.by/maps/29630/minsk-district/category/resort/184106404/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
          >
            Санаторий в Минской области
          </a>
          <iframe
            title={'map'}
            src="https://yandex.by/map-widget/v1/-/CCURZDF7-D"
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
