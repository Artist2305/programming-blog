import React from 'react';

import Header from '../Header';
import NavBar from '../NavBar';
import SearchBox from '../SearchBox';

import {
  NavContainer, SettingsBar, MobileItems,
  MobileBtnImg, DesktopBar, SocialWrapper
} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { toogleThemeMode } from '../../state/ui';
import { toogleBtnIcon, mobileBtnSelector } from '../../state/menuState';
import { useStaticQuery, graphql } from 'gatsby';

const Navigation: React.FC = ({ }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const dispatch = useDispatch();
  const { menuState } = useSelector(mobileBtnSelector);

  return (
    <NavContainer id="menu" menuState={menuState} >
      <Header siteTitle={data.site.siteMetadata.title} />
      <DesktopBar>
        <NavBar />
      </DesktopBar>
      <SettingsBar>
        <SearchBox />
        <SocialWrapper menuState={menuState} >
          <MobileBtnImg icon={'plug'}>
          </MobileBtnImg>
        </SocialWrapper>
        <SocialWrapper>
          <MobileBtnImg icon={'moon'} onClick={() => {
            dispatch(toogleThemeMode());
          }}>
          </MobileBtnImg>
        </SocialWrapper>
        <MobileItems onClick={() => { dispatch(toogleBtnIcon()); }}>
          <MobileBtnImg icon={menuState === 'open' ? 'times' : 'bars'}>
          </MobileBtnImg>
        </MobileItems>
      </SettingsBar>
    </NavContainer>
  )
}

export default Navigation;
