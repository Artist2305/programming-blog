import tw from 'twin.macro';
import { styled } from 'twin.macro';

export const NavBarWrapper = styled.div(({ btnIcon }) => [tw`lg:(static flex flex-row justify-center ml-10)
absolute flex-col content-start justify-start top-20`,
btnIcon === 'open' ? tw` ` : tw`hidden`
]);





