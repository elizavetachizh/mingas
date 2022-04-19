import React from 'react';
import { PageSection, Table, Tbody, Tr, Td } from './styles';

export default function GeneralInform() {
  return (
    <PageSection>
      <Table>
        <Tbody>
          <Tr>
            <Td>Адрес</Td>
            <Td>220037, г.Минск, ул.Ботаническая, 11/1</Td>
          </Tr>
          <Tr>
            <Td>Телефон (приёмная руководителя)</Td>
            <Td>(017) 299-28-80</Td>
          </Tr>
          <Tr>
            <Td>E-mail</Td>
            <Td>root@mingas.by</Td>
          </Tr>
          <Tr>
            <Td>Факс</Td>
            <Td>(017) 366-36-33</Td>
          </Tr>
        </Tbody>
      </Table>
    </PageSection>
  );
}
