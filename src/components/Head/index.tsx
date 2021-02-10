import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface HeadProps {
  title: string,
  description: string,
  keywords: string,
  author: string
}

const Head: React.FC<HeadProps> = (props) => {

  const data = useStaticQuery(graphql`
  query HomeQuery {
    site {
      siteMetadata {
        author
        description
        title
        keywords
      }
    }
  }
  
  `)

  return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title + ' | ' + data.site.siteMetadata.title}</title>
        <meta name = "keywords" content={props.keywords}/>
        <meta name = "author" content={props.author}/>
        <base href = "adres strony" target="_blank"/>
        <meta name = "description" content={props.description}/>
        <meta name = "robots" content="index, follow" />
      </Helmet>
  )
}

export default Head;
