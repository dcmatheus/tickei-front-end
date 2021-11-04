import tw from 'tailwind-styled-components';

export const StyledHeader = tw.header`
  flex
  justify-between
  p-2
  ${({ mobileScreen }) => (mobileScreen ? 'px-2' : 'px-5')}
`;

export const UserButton = tw.button`
  rounded-full
  bg-gray-400
  text-2xl
  p-1
`;

export const LogoContainer = tw.h1`
  flex
  content-center
  text-gray-400
  ${({ mobileScreen }) => (mobileScreen ? 'text-3xl' : 'text-7xl')}
  justify-self-center
  font-bold
`;

export const MenuButton = tw.button`
  text-gray-400
  ${({ mobileScreen }) => (mobileScreen ? 'text-3xl' : 'text-6xl')}
`;
