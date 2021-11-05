import React from 'react';
// import { useMediaQuery } from 'react-responsive';
import { VscMenu } from 'react-icons/vsc';
import { BsCheck2Circle } from 'react-icons/bs';
import {
  StyledHeader,
  LogoContainer,
} from '../styles/Components';

export default function Header() {
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });
  return (
    <StyledHeader>
      <VscMenu
        className={ `
          text-gray-400
          text-3xl
        ` }
      />
      <LogoContainer>
        <BsCheck2Circle />
        TICKEI
      </LogoContainer>
    </StyledHeader>
  );
}
