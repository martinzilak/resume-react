import { createGlobalStyle } from 'styled-components';
import {
  RegularFont,
  BoldFont,
  ItalicFont,
  BoldItalicFont,
} from '../assets/fonts';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${RegularFont}) format('opentype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${BoldFont}) format('opentype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${ItalicFont}) format('opentype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${BoldItalicFont}) format('opentype');
        font-weight: bold;
        font-style: italic;
    }
    
    :root {
        font-family: 'TexGyreHeros', Arial, sans-serif;
        color: ${({ theme }) => theme.colors.darkGray};
        color-scheme: light dark;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
