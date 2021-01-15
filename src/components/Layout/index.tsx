import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './../../assets/styles/globalStyles';
import "tailwindcss/tailwind.css";
import "../../css/styles.css";
import * as Theme from './../../assets/styles/theme';
import {
  LayoutWrapper, MainWrapper, NavContainer,
  ContentWrapper, Footer, FooterTite,
  FooterLink, RowWrapper, Divider, Copyright,
  SettingsBar, MobileItems, MobileBtnImg,
  DesktopBar, SocialWrapper
} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { uiSelector, toogleThemeMode } from '../../state/ui';
import store from '../../state/store';
import { toogleBtnIcon, mobileBtnSelector, switchOffMenu } from '../../state/mobileBtn';

import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import NavBar from '../NavBar';
import SearchBox from '../SearchBox';
import SectionTitle from '../SectionTitle';

const Layout: React.FC = ({ children }) => {

  const { themeMode } = useSelector(uiSelector);
  const { btnIcon } = useSelector(mobileBtnSelector);

  let funcRun = false;

  const handleResize = () => {
    if (store.getState().mobileBtn.btnIcon === "open") {
      if (funcRun == false) {
        dispatch(switchOffMenu());
        funcRun = true;
        setTimeout(() => funcRun = false, 1000)
      }
      console.log(store.getState().mobileBtn.btnIcon);
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);


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

  interface TestArticles {
    id: number;
    title: string;
    slug: string
  }

  let testDataArticleLink: TestArticles[] = [
    { id: 1, title: "Article", slug: "/article" },
    { id: 2, title: "Lorem", slug: "/article" },
    { id: 3, title: "Perlin Noise", slug: "/article" },
    { id: 4, title: "Ipsum", slug: "/article" },
    { id: 5, title: "Ipsumlorem", slug: "/article" },
  ]
  let footerDatalinks: TestArticles[] = [
    { id: 1, title: "Sitemap", slug: "/article" },
    { id: 2, title: "Blog", slug: "/article" },
    { id: 3, title: "Help", slug: "/article" },
    { id: 4, title: "Privacy Policy", slug: "/article" },
    { id: 5, title: "About", slug: "/article" },
    { id: 6, title: "Cooperation", slug: "/article" },
    { id: 7, title: "Contact", slug: "/article" },
    { id: 8, title: "Terms Of Service", slug: "/article" },
    { id: 9, title: "Disclosure", slug: "/article" },
  ]
  let testArticlelinks = testDataArticleLink.map(s => <FooterLink key={s.id} to={s.slug}>{s.title}</FooterLink>);
  let footerLinks = footerDatalinks.map(s => <FooterLink key={s.id} to={s.slug}>{s.title}</FooterLink>);

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles />
      <MainWrapper>
        <LayoutWrapper>
          <NavContainer id="menu" btnIcon={btnIcon} >
            <Header siteTitle={data.site.siteMetadata.title} />
            <DesktopBar>
              <NavBar />
            </DesktopBar>
            <SettingsBar>
              <SearchBox />
              <SocialWrapper btnIcon={btnIcon} >
                <MobileBtnImg icon={'plug'}>
                </MobileBtnImg>
              </SocialWrapper>
              <SocialWrapper>
                <MobileBtnImg icon={'moon'} onClick={() => {
                  dispatch(toogleThemeMode());
                  console.log("sfsfsdfs");
                }}>
                </MobileBtnImg>
              </SocialWrapper>
              <MobileItems onClick={() => { dispatch(toogleBtnIcon()); }}>
                <MobileBtnImg icon={btnIcon === 'open' ? 'times' : 'bars'}>
                </MobileBtnImg>
              </MobileItems>
            </SettingsBar>
          </NavContainer>
          <SectionTitle title={store.getState().title.pageTitle} />
          <ContentWrapper>
            {children}
          </ContentWrapper>
          <Footer>
            <FooterTite>Top Topics</FooterTite>
            <RowWrapper>
              {testArticlelinks}
            </RowWrapper>
            <Divider />
            <RowWrapper>
              {footerLinks}
            </RowWrapper>
            <RowWrapper>
              <Copyright>Copyright © 2020 Mateusz Szostek, all rights reserved.</Copyright>
            </RowWrapper>
          </Footer>
        </LayoutWrapper>
      </MainWrapper>
    </ThemeProvider >
  )
}

export default Layout;
