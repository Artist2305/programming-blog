import tw from 'twin.macro';
import { styled } from 'twin.macro';

export const MainWrapper = tw.div`flex justify-center `;
export const LayoutWrapper = tw.div` relative container flex flex-col mr-5 ml-5`;
export const NavBarWrapper = styled.div(({ menuState }) => [tw`lg:(static flex flex-row justify-center ml-10)
absolute flex-col content-start justify-start top-20`, menuState === 'open' ? tw` ` : tw`hidden`]);
export const NavBtn = tw.button`w-12 h-12 bg-gray-600 rounded-full ml-1 mr-1 duration-300 lg:(static) hover:(bg-gray-500) `;
export const MobileBtn = tw.button``;



