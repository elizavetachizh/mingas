import React, { useEffect, useState } from 'react';
import {
  Container,
  Background,
  Menu,
  MenuClose,
  ButtonsContainer,
  Dropdown,
  DivButtonHeader,
  DivColumn,
  BackgroundText,
  IoIosMenus,
  IoIosCloses,
  ContanerLink,
  ButtonForMenu,
} from './styles';
import { ButtonLink } from '../../pages/services/styles';
import MobileNavigation from './mobileNavigation';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useFetchServicesQuery } from '../../redux/services/services';
import { useFetchMainPostsQuery } from '../../redux/services/mainpost';
import { useFetchPostsQuery } from '../../redux/services/posts';
import { setServices } from '../../redux/slices/servicesSlice';
import { setMainPosts } from '../../redux/slices/mainPostsSlice';
import { setPosts } from '../../redux/slices/postsSlice';
import linksForMenu from '../../const/consts';
import UpperContainerHeader from './UpperContainerHeader';
export default function Header({ backgroundHeader }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { data: services, isLoading } = useFetchServicesQuery();
  const { data: mainPosts } = useFetchMainPostsQuery();
  const { data: posts } = useFetchPostsQuery();
  useEffect(() => {
    if (!isLoading) {
      dispatch(setServices(services));
      dispatch(setMainPosts(mainPosts));
      dispatch(setPosts(posts));
    }
  }, [isLoading, dispatch, services, mainPosts, posts]);
  const onClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (!open) {
      document.body.classList.remove('mobile');
    } else {
      document.body.classList.add('mobile');
    }
  }, [open]);
  const openMobile = (
    <Menu onClick={onClick}>
      <IoIosMenus />
    </Menu>
  );

  const closeMobile = (
    <MenuClose onClick={onClick}>
      <IoIosCloses />
    </MenuClose>
  );

  return (
    <Container backgroundHeader={backgroundHeader}>
      <Background backgroundHeader={backgroundHeader}>
        {open && <MobileNavigation />}
        {open ? closeMobile : openMobile}
        <BackgroundText>
          <DivColumn>
            <UpperContainerHeader />
            <ButtonsContainer>
              {linksForMenu().map((el) => (
                <Dropdown>
                  <ButtonForMenu to={`${el.link}`}>
                    {el.name} <span />
                  </ButtonForMenu>
                  {el.arrayOfLinks && (
                    <DivButtonHeader className={'header-btns'}>
                      {el.arrayOfLinks.map((link) =>
                        link?.arrayOfSubLinks ? (
                          <ContanerLink>
                            <ButtonLink to={`${link.link}`}>
                              {link.name} <IoIosArrowForward color={'#0d4475'} />
                            </ButtonLink>
                            <span style={{ margin: '20% 0 0' }}>
                              {link?.arrayOfSubLinks.map((subLink) => (
                                <NavLink to={`${subLink.link}`}>{subLink.name}</NavLink>
                              ))}
                            </span>
                          </ContanerLink>
                        ) : (
                          <ButtonLink to={`${link.link}`}>{link.name}</ButtonLink>
                        )
                      )}
                    </DivButtonHeader>
                  )}
                </Dropdown>
              ))}
            </ButtonsContainer>
          </DivColumn>
        </BackgroundText>
      </Background>
    </Container>
  );
}
