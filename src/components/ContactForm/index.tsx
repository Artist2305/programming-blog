import React from 'react';
import {
  ContactWrapper, FormWrapper, FormDescription, FormCol,
  Label, Input, MessageInput, DetHeader, Details, Button, DetailsCol,
  SubscribeInput
} from './styles';

const ContactForm: React.FC = () => {
  return (
    <ContactWrapper>
      <FormDescription>Aenean tincidunt lacus enim, nec imperdiet dui consectetur a. In a urna faucibus, aliquam sem id, eleifend erat. Phasellus tempor ante libero, quis gravida dui commodo sit amet. </FormDescription>
      <FormWrapper>
        <FormCol>
          <Label>Name</Label>
          <Input></Input>
          <Label>Email Address</Label>
          <Input></Input>
          <Label>Message</Label>
          <MessageInput></MessageInput>
          <Button>Send</Button>
        </FormCol>
        <DetailsCol>
          <DetHeader>Contact Details</DetHeader>
          <Details>CA Code Artist</Details>
          <Details>szostekm230590@gmail.com</Details>
          <DetHeader>Subscribe Our Newsteller</DetHeader>
          <SubscribeInput></ SubscribeInput>
          <Button>Subscribe</Button>
        </DetailsCol>
      </FormWrapper>
    </ContactWrapper>
  )
}
export default ContactForm;
