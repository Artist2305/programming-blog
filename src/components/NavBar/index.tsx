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
      title: 'Tutorials',
      slug: '/tutorials',
      action: 'TUTORIALS'
    },
    {
      id: 3,
      title: 'How To',
      slug: '/howto',
      action: 'HOWTO'
    },
    {
      id: 4,
      title: 'Articles',
      slug: '/articles',
      action: 'ARTICLES'
    },
    {
      id: 6,
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
