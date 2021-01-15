import tw from 'twin.macro';
import { Link } from 'gatsby';
import Icon from '../../utils/Icon';
import { styled } from 'twin.macro';
import { ThemeType } from './theme';

export const MainWrapper = tw.div`flex justify-center `;
export const LayoutWrapper = tw.div` relative container flex flex-col mr-5 ml-5`;

export const NavContainer = styled.div(({ btnIcon }) => [tw`shadow-md h-96 z-50 w-full flex absolute
justify-between mb-10 p-3 lg:(bg-transparent)`,
btnIcon === 'open' ? tw`h-96` : tw`h-20`
]);

export const SocialWrapper = styled.div(({ btnIcon }) => [tw`left-5 flex flex-row mt-1 absolute lg:(static)`,
btnIcon === 'open' ? tw`bottom-5` : tw`hidden lg:(block)`
]);;

export const NavBarWrapper = styled.div(({ btnIcon }) => [tw`lg:(static flex flex-row justify-center ml-10)
absolute flex-col content-start justify-start top-20`,
btnIcon === 'open' ? tw` ` : tw`hidden`
]);




export const ContentWrapper = tw.div`flex flex-col`;


export const SettingsBar = tw.div`ml-auto flex content-center justify-center flex-wrap`;
export const NavBtn = tw.button`w-12 h-12 bg-gray-600 rounded-full ml-1 mr-1 duration-300
lg:(static)
hover:(bg-gray-500)
`;
export const DesktopBar = tw.div`lg:(inline)`


export const MobileItems = tw.button`absolute outline-none right-4 top-5 w-12 h-12 block lg:hidden
focus:(outline-none) active:(outline-none)`;


export const MobileBtn = tw.button``;
export const MobileBtnImg = tw(Icon)`w-12 h-12 ml-1 mr-1 duration-300
lg:(static)
hover:(cursor-pointer)
`;

export const Footer = tw.footer`flex flex-col justify-center mt-6`;
export const FooterTite = tw.h3`text-sm font-medium text-center pb-2`;
export const FooterLink = tw(Link)`text-sm text-center font-normal pl-2 pr-2
active:(outline-none)
focus:(outline-none)`;
export const RowWrapper = tw.div`flex-wrap flex flex-row justify-center my-1`;
export const Divider = tw.div`h-px bg-gray-400 my-2 mb-2`;
export const Copyright = tw.p`text-sm text-center font-normal pl-2 pr-2`;

