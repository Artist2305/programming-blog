import styled from 'twin.macro';
import { Link } from 'gatsby';

export const NavLink = styled(Link)`
  m-3 flex flex-col justify-center tracking-wide duration-300 relative 
  lg:(my-4 mx-3)
  before:(content absolute w-full h-1 bg-gray-600 bottom-0 duration-200 opacity-0 )
  hover:before:(w-full opacity-100)`
  ;





