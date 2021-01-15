import React from 'react';
import { NavLink } from './styles';

import { useDispatch } from 'react-redux';
import { changePageTitle } from '../../state/title';
import { switchOffMenu } from '../../state/menuState';

interface Props {
  title: string,
  slug: string,
  action: string
}

const NavItem: React.FC<Props> = ({ title, slug, action }) => {

  const dispatch = useDispatch();

  return (
    <NavLink to={slug} onClick={() => {
      dispatch(changePageTitle(action));
      dispatch(switchOffMenu());
    }}>{title}</NavLink>
  )
}

export default NavItem;
