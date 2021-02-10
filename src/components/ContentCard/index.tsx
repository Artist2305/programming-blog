import React from 'react';
import { Link } from 'gatsby';
import { Tags, Title, Description, Date, Image, CardWrapper, DescWrapper, CardButton } from './styles';


interface Props {
  image: string,
  tags: string,
  title: string,
  desc: string,
  date: string,
  slug: string,
  color: string
}

const ContentCard: React.FC<Props> = ({ image, tags, title, desc, date, slug, color }) => {
  console.log(slug);
  const divStyle = {
    backgroundColor: color
  };
  return (
    <CardWrapper>
      <Image src={image} style={divStyle}></Image>
      <DescWrapper>
        <Tags>{tags}</Tags>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </DescWrapper>
      <Date>{date}</Date>
      <CardButton>
        <Link to={slug}>READ MORE</Link>
      </CardButton>
    </CardWrapper>
  )
}
export default ContentCard;
