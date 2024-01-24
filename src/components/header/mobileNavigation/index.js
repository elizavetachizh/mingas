import {
  CompanyButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  DivBlocksHeader,
  ContainerAbsolute,
} from './styles';
import { ButtonLink } from '../../../pages/services/styles';
import React, { useRef, useState} from 'react';
import {IoIosArrowUp, IoIosArrowDown} from 'react-icons/io';
import { ContainerElements, IoMdContacts, IoMdEyeOffs, PersonalAccButton} from '../styles';
import SearchPage from '../../../pages/SearchPage';
import Language from '../language';
import linksForMenu from '../../../const/consts';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
const ref = useRef('test')
  const animate = (name) => {
    console.log(name)
   ref.current = name
  if( ref.current !== 'close' ){
    ref.current = name
    setIsOpen(true);
  } else{
    setIsOpen(false)
  }
  };
  console.log(ref)

  return (
    <ContainerAbsolute>
      <LinksContainer>
        <ContainerElements className={'mobile'}>
          <PersonalAccButton href={'https://service.mingas.by:5002/auth/login#login'}>
            <IoMdContacts className={'icon iconMobile'} />
          </PersonalAccButton>
          <SearchPage classname={'header'} />
          <Language />
          <IoMdEyeOffs
            className={'icon'}
            href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
          />
        </ContainerElements>
        {linksForMenu().map((el) => (
            <Dropdown>
              <DivBlocksHeader ref={ref}>
                <CompanyButton to={`${el.link}`}>
                  {el.name}
                </CompanyButton>
                {el.arrayOfLinks &&  <div>
                  {isOpen && el.name === ref.current ? <IoIosArrowUp onClick={()=>animate('close')} /> : <IoIosArrowDown onClick={()=>animate(el.name)} />}
                </div>}
              </DivBlocksHeader>
              {el.arrayOfLinks && (
              <DivButtonHeader className={ ref.current === el.name  && `handleBtn`}>
                <div>
                  {el.arrayOfLinks.map((link) =>

                      <ButtonLink to={`${link.link}`}>{link.name}</ButtonLink>

                  )}
                </div>
              </DivButtonHeader>
              )}
            </Dropdown>
        ))}
      </LinksContainer>
    </ContainerAbsolute>
  );
}
