export type FontWeight = 'normal' | 'bold';

export type FontStyle = 'normal' | 'italic';

export type FontSize =
  | 'xsmall'
  | 'small'
  | 'smedium'
  | 'medium'
  | 'mlarge'
  | 'large'
  | 'xlarge';

export type FontColor =
  | 'darkGray'
  | 'gray'
  | 'lightGray'
  | 'green'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'blue'
  | 'white';

type TypographyOptions = {
  weight?: FontWeight;
  style?: FontStyle;
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
    pink: '#F16C9E',
    blue: '#6C9EF1',
    white: '#FFFFFF',
  },
  fontSizes: {
    xsmall: '0.6rem',
    small: '0.75rem',
    smedium: '0.9rem',
    medium: '1.1rem',
    mlarge: '1.3rem',
    large: '1.5rem',
    xlarge: '2.75rem',
  },
  lineHeights: {
    xsmall: '0.65rem',
    small: '0.8rem',
    smedium: '1rem',
    medium: '1.25rem',
    mlarge: '1.45rem',
    large: '1.65rem',
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
    ${options.color ? `color: ${THEME.colors[options.color]}` : ''};
  `,
};
