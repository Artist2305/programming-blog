import React from 'react';
import { Link } from 'gatsby';
import { Tags, Title, Description, Date, Image, CardWrapper, DescWrapper, CardButton } from './styles';

interface Props {
  image: string,
  tags: string,
  title: string,
  description: string,
  date: string,
  slug: string
}

const ContentCard: React.FC<Props> = ({ image, tags, title, description, date, slug }) => {
  console.log(slug);
  return (
    <CardWrapper>
      <Image src={image}></Image>
      <DescWrapper>
        <Tags>{tags}</Tags>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescWrapper>
      <Date>{date}</Date>
      <CardButton>
        <Link to={slug}>READ MORE</Link>
      </CardButton>
    </CardWrapper>
  )
}
export default ContentCard;
