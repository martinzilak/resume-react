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
        src: url(${RegularFont}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${BoldFont}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${ItalicFont}) format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'TexGyreHeros';
        src: url(${BoldItalicFont}) format('truetype');
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

    @page {
        size: A4;
        margin: 0;
    }

    @media print {
        :root {
            color-scheme: light;
            print-color-adjust: exact;
        }

        body {
            margin: 0;
        }
    }
`;
