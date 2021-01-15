import React from 'react';
import {
  Footerrrr, FooterTite, RowWrapper,
  Divider, Copyright, FooterLink
} from './styles';

const Footer: React.FC = ({ }) => {

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
    <Footerrrr>
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
    </Footerrrr>
  )
}

export default Footer;
