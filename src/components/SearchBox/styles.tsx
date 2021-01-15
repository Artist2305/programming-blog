import { styled } from 'twin.macro';
import tw from 'twin.macro';
import { Link } from 'gatsby';

export const SearchInput = styled.input(({ btnIcon }) => [tw`w-48 sm:(w-64) absolute h-10 bg-white border-gray-100 mx-4 mt-0 rounded border-2
focus:(outline-none)
active:(outline-none)`,
btnIcon === 'open' ? tw`absolute left-2 bottom-20` : tw`hidden lg:(block)`
]);

export const SearchImage = tw.div` absolute mb-2 left-48 bottom-20 sm:(left-64 bottom-20  mb-2) lg:(absolute left-auto -right-64 -bottom-10)`;

export const SearchWrapper = tw.div`absolute lg:(right-44 top-2 )`;

export const SearchContainer = tw.div`-left-1 -bottom-1 sm:(bottom-0) absolute lg:(left-auto bottom-auto right-44) flex flex-row `;

export const Title = tw.h2`ml-3 font-bold mb-5 text-2xl md:(ml-0 text-3xl)`;

export const NavLink = styled(Link)`
  flex flex-col justify-center m-4 tracking-wide duration-300 relative 
  before:(content absolute w-full h-1 bg-gray-600 bottom-1 duration-200 opacity-0 )
  hover:before:(w-full opacity-100)`
  ;





