import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import { FiUser } from 'react-icons/fi';
import { BsCheck2Circle } from 'react-icons/bs';
import { VscMenu } from 'react-icons/vsc';
import {
  StyledHeader,
  // UserButton,
  LogoContainer,
  MenuButton,
} from '../styles/Components';

export default function Header() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  return (
    <StyledHeader mobileScreen={ isTabletOrMobile }>
      <MenuButton mobileScreen={ isTabletOrMobile }>
        <VscMenu className="h-full w-full" />
      </MenuButton>
      <LogoContainer mobileScreen={ isTabletOrMobile }>
        <BsCheck2Circle />
        TICKEI
      </LogoContainer>
      {/* <UserButton>
        <FiUser className="h-full w-full" />
      </UserButton> */}
    </StyledHeader>
  );
}
