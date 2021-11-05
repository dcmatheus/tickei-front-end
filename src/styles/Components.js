import tw from 'tailwind-styled-components';

export const StyledHeader = tw.header`
  flex
  justify-between
  p-2
  ${({ mobileScreen }) => (mobileScreen ? 'px-2' : 'px-5')}
`;

export const LogoContainer = tw.h1`
  flex
  content-center
  text-gray-400
  ${({ mobileScreen }) => (mobileScreen ? 'text-3xl' : 'text-7xl')}
  justify-self-center
  font-bold
`;

export const ListTable = tw.div`
  bg-gray-800
  rounded-md
  text-gray-400
  m-4
  flex
  flex-col
  align-middle
  justify-center
  p-3
`;
