import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './../../assets/styles/globalStyles';
import "tailwindcss/tailwind.css";
import "../../css/styles.css";
import * as Theme from './../../assets/styles/theme';
import {
  LayoutWrapper, MainWrapper, NavContainer,
  ContentWrapper, PaginationWrapper,
  PaginationButton, Footer, FooterTite,
  FooterLink, RowWrapper, Divider, Copyright
} from './styles';

import { useSelector } from 'react-redux';
import { uiSelector } from '../../state/ui';
import store from '../../state/store';

import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import NavBar from '../NavBar';
import SearchBox from '../SearchBox';
import SectionTitle from '../SectionTitle';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

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
  const { themeMode } = useSelector(uiSelector);

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles />
      <MainWrapper>
        <LayoutWrapper>
          <NavContainer >
            <Header siteTitle={data.site.siteMetadata.title} />
            <NavBar />
          </NavContainer>
          <SectionTitle title={store.getState().title.pageTitle} />
          <SearchBox />
          <ContentWrapper>
            {children}
            <PaginationWrapper>
              <PaginationButton>1</PaginationButton>
              <PaginationButton>2</PaginationButton>
              <PaginationButton>3</PaginationButton>
              <PaginationButton>4</PaginationButton>
              <PaginationButton>5</PaginationButton>
            </PaginationWrapper>
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
