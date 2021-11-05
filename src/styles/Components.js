import tw from 'tailwind-styled-components';

export const StyledHeader = tw.header`
  flex
  justify-between
  p-2
  w-full
  px-2
`;

export const LogoContainer = tw.h1`
  flex
  content-center
  text-gray-400
  text-3xl
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
  p-2
  self-center
  w-11/12
  max-w-4xl
`;
