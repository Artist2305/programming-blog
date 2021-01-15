import tw from 'twin.macro';

export const CardWrapper = tw.div`w-full h-80 shadow-lg relative 
sm:(mr-3 ml-3)
md:(mr-0 ml-0)`;
export const Image = tw.img`bg-gray-100 w-full h-32`;
export const Tags = tw.span``;
export const Title = tw.h3`uppercase mt-1`;
export const Description = tw.p`text-sm mt-1 mb-2`;
export const Date = tw.p`absolute bottom-2 left-3`;
export const DescWrapper = tw.div`p-3`;
export const CardButton = tw.button`absolute border-none outline-none bottom-3 right-3 text-sm
active:(outline-none)
focus:(outline-none)
hover:(cursor-pointer)
before:(content absolute w-20 h-0.5 bg-gray-600 -bottom-1 duration-200 )
hover:before:(opacity-50 cursor-pointer)`;