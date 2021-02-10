import React from 'react';
import { Logo, Title, HeaderWrapper } from './styles';
import LogoImg from '../../images/CA_logo.svg';

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
      <Logo src={LogoImg}></Logo>
    </HeaderWrapper>
  )
}

export default Header;
