import React from 'react';
import { Logo, Title, HeaderWrapper } from './styles';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */

const Header: React.FC<Props> = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Logo>CA</Logo>
      <Title>{siteTitle}</Title>
    </HeaderWrapper>
  )
}

export default Header;
