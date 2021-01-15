import tw from 'twin.macro';
import styled from 'twin.macro';

export const ContactWrapper = tw.form`flex flex-col w-full justify-center content-center`;
export const FormDescription = tw.p`text-center text-base lg:(w-3/6) w-5/6 m-auto`;
export const FormWrapper = tw.div`flex flex-col flex-wrap content-center lg:(flex-nowrap flex-row)`;
export const FormCol = tw.div`flex flex-col content-center justify-center lg:(p-10 w-2/4)`;
export const DetailsCol = tw.div`lg:(p-10 w-2/4) flex flex-col content-center justify-center`;
export const Label = tw.label`mx-auto sm:(ml-3) w-56 text-base font-semibold`;
export const Input = tw.input`mx-auto text-base font-sans bg-gray-100 shadow outline-none  w-56 sm:(w-full h-9 p-3)`;
export const MessageInput = tw.textarea`mx-auto sm:(w-full h-56 p-3 mb-0) w-56 bg-gray-100 shadow outline-none text-base font-sans`;

export const DetHeader = tw.h3`text-center font-semibold text-base mt-6`;
export const Details = tw.p`text-center font-normal text-base`;

export const Button = tw.button`duration-300 outline-none bg-gray-300 px-10 py-2 mt-3 rounded ml-auto mr-auto shadow font-semibold
active:(outline-none)
focus:(outline-none)
hover:(bg-gray-400)`;

export const SubscribeInput = tw.input`mx-auto sm:(w-96) h-9 bg-gray-100 shadow outline-none p-3 text-base font-sans`;