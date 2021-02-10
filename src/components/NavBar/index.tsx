import React from 'react';
import { NavBarWrapper } from './styles';
import NavItem from '../NavItem';

import { useSelector } from 'react-redux';
import { mobileBtnSelector } from '../../state/menuState';

const NavBar: React.FC = ({ }) => {

  interface LinkItem {
    id: number,
    title: string,
    slug: string,
    action: string
  }
  const links: LinkItem[] = [
    {
      id: 0,
      title: 'Home',
      slug: '/',
      action: 'PROGRAMMING BLOG'
    },
    {
      id: 1,
      title: 'About',
      slug: '/about',
      action: 'ABOUT'
    },
    {
      id: 2,
      title: 'Contact',
      slug: '/contact',
      action: 'CONTACT'
    }
  ]
  let navLinks = links.map(s => <NavItem key={s.id} title={s.title} slug={s.slug} action={s.action} />);

  const { menuState } = useSelector(mobileBtnSelector);

  return (
    <NavBarWrapper menuState={menuState} >
      {navLinks}
    </NavBarWrapper>
  )
}

export default NavBar;
