import React, { useEffect, useState } from 'react';
import {
  Container,
  Background,
  Menu,
  MenuClose,
  ButtonsContainer,
  Dropdown,
  DivButtonHeader,
  BackgroundText,
  IoIosMenus,
  IoIosCloses,
  ButtonForMenu,
} from './styles';
import { ButtonLink } from '../../pages/services/styles';
import MobileNavigation from './mobileNavigation';
import { useDispatch } from 'react-redux';
import { useFetchPostsQuery } from '../../redux/services/posts';
import { setPosts } from '../../redux/slices/postsSlice';
import linksForMenu from '../../const/consts';
import UpperContainerHeader from './UpperContainerHeader';
export default function Header({ backgroundHeader }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { data: posts, isLoading } = useFetchPostsQuery();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setPosts(posts));
    }
  }, [isLoading, dispatch, posts]);
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
    <Container className={"header"} backgroundHeader={backgroundHeader}>
      <Background backgroundHeader={backgroundHeader}>
        {open && <MobileNavigation setOpen={setOpen} />}
        {open ? closeMobile : openMobile}
        <BackgroundText>
          <UpperContainerHeader />
          <ButtonsContainer>
            {linksForMenu().map((el) => (
              <Dropdown>
                <ButtonForMenu to={`${el.link}`}>
                  {el.name} <span />
                </ButtonForMenu>
                {el.arrayOfLinks && (
                  <DivButtonHeader className={'header-btns'}>
                    {el.arrayOfLinks.map((link) => (
                      <ButtonLink to={`${link.link}`}>{link.name}</ButtonLink>
                    ))}
                  </DivButtonHeader>
                )}
              </Dropdown>
            ))}
          </ButtonsContainer>
        </BackgroundText>
      </Background>
    </Container>
  );
}
