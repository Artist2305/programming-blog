import tw from 'twin.macro';
import { Link } from 'gatsby';

export const Footerrrr = tw.footer`flex flex-col justify-center mt-6`;
export const FooterTite = tw.h3`text-sm font-medium text-center pb-2`;
export const FooterLink = tw(Link)`text-sm text-center font-normal pl-2 pr-2 active:(outline-none) focus:(outline-none)`;
export const RowWrapper = tw.div`flex-wrap flex flex-row justify-center my-1`;
export const Divider = tw.div`h-px bg-gray-400 my-2 mb-2`;
export const Copyright = tw.p`text-sm text-center font-normal pl-2 pr-2`;