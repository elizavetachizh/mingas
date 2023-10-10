import React from 'react';
import SchemaOfBranches from '../ChemaOfBranches';
import background from '../../../../assets/Bubni/background2.webp';
import { useFetchOgonekQuery } from '../../../../redux/services/ogonek';
export default function Bubni() {
  const { data: infoBubni } = useFetchOgonekQuery({ typeBranch: 'бубны' });
  return (
    <SchemaOfBranches
      background={background}
      name={'Филиал Бубны'}
      info={infoBubni}
      carta={
        <div style={{ width: '80%', height: '500px', margin: '0 auto' }}>
          <a
            href="https://yandex.by/maps/org/proizvodstvennoye_respublikanskoye_predpriyatiye_mingaz_filial_bubny_po_proizvodstvu_selskokhozyaystvennoy_produktsii/1038334797/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
          >
            Производственное республиканское предприятие Мингаз филиал Бубны по производству
            сельскохозяйственной продукции
          </a>
          <a
            href="https://yandex.by/maps/29630/minsk-district/category/agricultural_enterprise/184106458/?utm_medium=mapframe&utm_source=maps"
            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
          >
            Сельскохозяйственное предприятие в Минской области
          </a>
          <iframe
            title={'file'}
            src="https://yandex.by/map-widget/v1/-/CCURZLF3OD"
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
