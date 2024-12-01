type FontSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

type FontColor =
  | 'darkGray'
  | 'gray'
  | 'lightGray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'red'
  | 'blue'
  | 'white';

type TypographyOptions = {
  weight?: 'normal' | 'bold';
  style?: 'normal' | 'italic';
  color?: FontColor;
  size?: FontSize;
};

export type Theme = {
  colors: Record<FontColor, string>;
  fontSizes: Record<FontSize, string>;
  lineHeights: Record<FontSize, string>;
  typography: (options: TypographyOptions) => string;
};

export const THEME: Theme = {
  colors: {
    darkGray: '#333333',
    gray: '#4D4D4D',
    lightGray: '#999999',
    green: '#9EF16C',
    orange: '#FDA333',
    purple: '#D3A4F9',
    red: '#F16C9E',
    blue: '#6C9EF1',
    white: '#FFFFFF',
  },
  fontSizes: {
    xsmall: '0.6rem',
    small: '0.8rem',
    medium: '1.2rem',
    large: '1.5rem',
    xlarge: '3rem',
  },
  lineHeights: {
    xsmall: '0.65rem',
    small: '0.85rem',
    medium: '1.3rem',
    large: '1.6rem',
    xlarge: '3rem',
  },
  typography: (options: TypographyOptions = {}) => `
    ${
      options.size
        ? `
    font-size: ${THEME.fontSizes[options.size]};
    line-height: ${THEME.lineHeights[options.size]};
    `
        : ''
    };
    ${options.weight ? `font-weight: ${options.weight}` : ''};
    ${options.style ? `font-style: ${options.style}` : ''};
    ${options.color ? `color: ${options.color}` : ''};
  `,
};
