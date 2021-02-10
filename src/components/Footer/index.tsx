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
    { id: 1, title: "When should you use struct?", slug: "/when-should-you-use-struct-charp" },
    { id: 2, title: "Why media queries run at wrong width?", slug: "/why-media-queries-run-at-wrong-width" },
    { id: 3, title: "How to update all Node dependencies?", slug: "/how-to-update-all-node-dependencies" },
  ]
  let footerDatalinks: TestArticles[] = [
    { id: 1, title: "Home", slug: "/" },
    { id: 2, title: "Help", slug: "/help" },
    { id: 3, title: "Privacy Policy", slug: "/privacyPolicy" },
    { id: 4, title: "About", slug: "/about" },
    { id: 5, title: "Cooperation", slug: "/cooperation" },
    { id: 6, title: "Contact", slug: "/contact" },
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
