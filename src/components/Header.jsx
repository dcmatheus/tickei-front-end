import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { VscMenu } from 'react-icons/vsc';
import { BsCheck2Circle } from 'react-icons/bs';
import {
  StyledHeader,
  LogoContainer,
} from '../styles/Components';

export default function Header() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  return (
    <StyledHeader mobileScreen={ isTabletOrMobile }>
      <VscMenu
        className={ `
          text-gray-400
          ${isTabletOrMobile ? 'text-3xl' : 'text-7xl'}
        ` }
      />
      <LogoContainer mobileScreen={ isTabletOrMobile }>
        <BsCheck2Circle />
        TICKEI
      </LogoContainer>
    </StyledHeader>
  );
}
