import { FC } from 'react';
import styled from 'styled-components';
import { HeadlineBoldFont, HeadlineRegularFont } from '../assets/fonts';

const HeadlineComponent = styled.div`
  @font-face {
    font-family: 'Lato';
    src: url(${HeadlineRegularFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url(${HeadlineBoldFont}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  font-family: 'Lato', Arial, sans-serif;
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${({ theme }) => theme.typography({ size: 'xlarge' })};
`;

const Bold = styled.span`
  ${({ theme }) => theme.typography({ weight: 'bold' })};
`;

const BoldOrange = styled(Bold)`
  ${({ theme }) => theme.typography({ color: 'orange' })};
`;

export const Headline: FC = () => (
  <HeadlineComponent>
    <span>Martin&nbsp;</span>
    <BoldOrange>Ži</BoldOrange>
    <Bold>lák</Bold>
  </HeadlineComponent>
);
