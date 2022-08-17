import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Ogonek from '../Ogonek';
import Bubni from '../Bubni';
import TBZ from '../TBZ';
import {
  BlockBtn,
  Button,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import { useParams } from 'react-router-dom';
import {
  ContainerInform,
  DivBlocks,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
const links = [
  { id: 1, name: 'Филиал оздоровительный комплекс "Огонек"', inform: <Ogonek /> },
  { id: 2, name: 'Филиал "Бубны"', inform: <Bubni /> },
  { id: 3, name: 'Филиал "Торфобрикетный завод "Сергеевическое"', inform: <TBZ /> },
];
export default function HeaderBranches() {
  const navigate = useNavigate();
  const { linkId } = useParams();
  const [title, setTitle] = useState('');
  const [inform, setInform] = useState('');
  const [currentServiceID, setServiceID] = useState(null);
  const handlerLinkClick = useCallback(
    (linkId) => {
      const current = links.find((element) => element.id === linkId);
      navigate(`/company/branches/${current.id}`);
      setInform(current.inform);
      setTitle(current.name);
      setServiceID(currentServiceID ? '' : linkId);
    },
    [inform, title, currentServiceID]
  );
  useEffect(() => {
    const current = links.find((element) => element.id === +linkId);
    setInform(current.inform);
    setTitle(current.name);
  }, [linkId, inform, title]);
  return (
    <DivBlocks>
      {/*<HeaderCompanyDiv>*/}
      {/*<Name>Филиалы УП "Мингаз"</Name>*/}
      {/*{links.map((el) => (*/}
      {/*  <BlockBtn>*/}
      {/*    <Button*/}
      {/*      className={currentServiceID === el.id ? 'background' : ''}*/}
      {/*      key={el.id}*/}
      {/*      onClick={() => handlerLinkClick(el.id)}*/}
      {/*    >*/}
      {/*      {el.name}*/}
      {/*    </Button>*/}
      {/*  </BlockBtn>*/}
      {/*))}*/}
      {/*</HeaderCompanyDiv>*/}
      {/*<ContainerInform>*/}
      {/*  {linkId && <Name>{title}</Name>}*/}
      {/*  {inform}*/}
      {/*</ContainerInform>*/}
    </DivBlocks>
  );
}
