import React from 'react';
import { Title } from './styles';

interface Props {
  title: string
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <Title>{title}</Title>
  )
}

export default SectionTitle;
