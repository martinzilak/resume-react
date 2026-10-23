import { FC } from 'react';
import styled from 'styled-components';
import { HeadlineBoldFont, HeadlineRegularFont } from '../assets/fonts';
import { Resume } from '../data';

type HeadlineProps = Resume['name'] & {
  emphasisLength?: number;
};

const HeadlineComponent = styled.h1`
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
  flex: none;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 1.25rem 1rem 1rem;
  font-weight: normal;
  ${({ theme }) => theme.typography({ size: 'xlarge' })};
`;

const Bold = styled.span`
  ${({ theme }) => theme.typography({ weight: 'bold' })};
`;

const BoldOrange = styled(Bold)`
  ${({ theme }) => theme.typography({ color: 'orange' })};
`;

export const Headline: FC<HeadlineProps> = ({
  first,
  last,
  emphasisLength = 2,
}) => (
  <HeadlineComponent>
    <span>{first}&nbsp;</span>
    <BoldOrange>{last.slice(0, emphasisLength)}</BoldOrange>
    <Bold>{last.slice(emphasisLength)}</Bold>
  </HeadlineComponent>
);
