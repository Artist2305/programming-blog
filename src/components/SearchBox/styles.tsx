import styled from 'twin.macro';
import tw from 'twin.macro';
import { Link } from 'gatsby';

export const SearchInput = tw.input`w-64 outline-none bg-transparent border-b-2 border-gray-500`;
export const SearchText = tw.p`text-lg mr-4`;
export const SearchContainer = tw.div`flex flex-row`;

export const NavLink = styled(Link)`
  flex flex-col justify-center m-4 tracking-wide duration-300 relative 
  before:(content absolute w-full h-1 bg-gray-600 bottom-1 duration-200 opacity-0 )
  hover:before:(w-full opacity-100)`
  ;





