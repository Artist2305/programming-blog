import tw from 'twin.macro';
import { styled } from 'twin.macro';
import Icon from '../../utils/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavContainer = styled.div(({ menuState }) => [tw`rounded-md shadow-md h-72 z-50 w-full flex absolute
justify-between mb-10 p-3 lg:(bg-transparent)`, menuState === 'open' ? tw`h-72` : tw`h-20`]);
export const SettingsBar = tw.div`ml-auto flex content-center justify-center flex-wrap`;
export const MobileItems = tw.button`absolute outline-none right-4 top-5 w-12 h-12 block lg:hidden
focus:(outline-none) active:(outline-none)`;
export const AwesomeIcon = tw(FontAwesomeIcon)`w-12 h-12 ml-1 mr-1 duration-300 lg:(static) hover:(cursor-pointer)`;
export const MobileBtnImg = tw(Icon)`w-12 h-12 ml-1 mr-1 duration-300 lg:(static) hover:(cursor-pointer)`;
export const DesktopBar = tw.div`lg:(inline)`
export const SocialWrapper = styled.div(({ menuState }) => [tw`left-5 flex flex-row mt-1 absolute lg:(static)`,
menuState === 'open' ? tw`bottom-5` : tw`hidden lg:(block)`]);;
