import tw from 'twin.macro';
import { styled } from 'twin.macro';

export const NavBarWrapper = styled.div(({ menuState }) => [tw`lg:(static flex flex-row justify-center ml-10)
absolute flex-col content-start justify-start top-20`, menuState === 'open' ? tw` ` : tw`hidden`]);





