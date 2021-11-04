import React from 'react';
import { FiUser } from 'react-icons/fi';
import { BsCheck2Circle } from 'react-icons/bs';
import { StyledHeader, UserButton, LogoContainer } from '../styles/Components';

export default function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <BsCheck2Circle />
        TICKEI
      </LogoContainer>
      <UserButton>
        <FiUser className="h-full w-full" />
      </UserButton>
    </StyledHeader>
  );
}
