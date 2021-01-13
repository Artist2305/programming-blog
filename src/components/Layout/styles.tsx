import tw from 'twin.macro';
import { Link } from 'gatsby';

export const MainWrapper = tw.div`flex justify-center `;
export const LayoutWrapper = tw.div`container flex flex-col`;
export const NavContainer = tw.div`flex flex-row mb-10 p-3 bg-purple-300`;
export const ContentWrapper = tw.div`flex flex-col`;
export const PaginationButton = tw.button`w-10 h-10 shadow-md m-1 text-gray-700 outline-none duration-200
hover:(cursor-pointer bg-gray-300)
`;
export const PaginationWrapper = tw.div`flex flex-row justify-center mb-10`;

export const Footer = tw.footer`flex flex-col justify-center `;
export const FooterTite = tw.h3`text-sm font-medium text-center pb-2`;
export const FooterLink = tw(Link)`text-sm text-center font-normal pl-2 pr-2`;
export const RowWrapper = tw.div`flex flex-row justify-center my-1`;
export const Divider = tw.div`h-px bg-gray-400 my-2 mb-2`;
export const Copyright = tw.p`text-sm text-center font-normal pl-2 pr-2`;