import tw from 'tailwind-styled-components';

export const StyledHeader = tw.header`
  bg-blue-400
  h-16
  flex
  justify-between
  p-2
`;

export const UserButton = tw.button`
  rounded-full
  bg-gray-100
  w-12
  h-full
  p-1
`;

export const LogoContainer = tw.h1`
  flex
  content-center
  text-5xl
  font-bold
`;
