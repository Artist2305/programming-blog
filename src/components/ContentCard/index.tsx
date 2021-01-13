import React from 'react';
import { Tags, Title, Description, Date, Image, CardWrapper, DescWrapper, CardButton } from './styles';

interface Props {
  image: string,
  tags: string,
  title: string,
  desc: string,
  date: string,
}

const ContentCard: React.FC<Props> = ({ image, tags, title, desc, date }) => {
  return (
    <CardWrapper>
      <Image src={image}></Image>
      <DescWrapper>
        <Tags>{tags}</Tags>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <Date>{date}</Date>
        <CardButton>READ MORE</CardButton>
      </DescWrapper>
    </CardWrapper>
  )
}
export default ContentCard;
