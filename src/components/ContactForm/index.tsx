import React from 'react';
import {
  ContactWrapper, FormWrapper, FormDescription, FormCol,
  Label, Input, MessageInput, DetHeader, Details, Button, DetailsCol,
  SubscribeInput
} from './styles';

const ContactForm: React.FC = () => {
  return (
    <ContactWrapper>
      <FormDescription>I invite you to start a dialogue. I will be happy to consider any cooperation proposal. I will reply as soon as possible.</FormDescription>
      <FormWrapper>
        <FormCol>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="w-full flex flex-col content-center justify-center">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <Label>Name</Label>
            <Input></Input>
            <Label>Email Address</Label>
            <Input></Input>
            <Label>Message</Label>
            <MessageInput></MessageInput>
            <Button>Send</Button>
          </form>
        </FormCol>
        <DetailsCol>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="newsteller" className="w-full flex flex-col content-center justify-center">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="newsteller" />
            <DetHeader>Contact Details</DetHeader>
            <Details>CA Code Artist</Details>
            <Details>szostekm230590@gmail.com</Details>
            <DetHeader>Subscribe Our Newsteller</DetHeader>
            <SubscribeInput></ SubscribeInput>
            <Button>Subscribe</Button>
          </form>
        </DetailsCol>
      </FormWrapper>
    </ContactWrapper>
  )
}
export default ContactForm;
