import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    font-size: 18px;
    font-family: lato;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
  }
  input {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
  }
  #menu {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  .blog-post-content > blockquote{
    background-color: ${({ theme }) => theme.colors.quoteBackground};
    color: ${({ theme }) => theme.colors.primary};
  }
  .blog-post-content a{
    border-color:  ${({ theme }) => theme.colors.secondary};
    border-bottom: solid 1px;
  }
  
`