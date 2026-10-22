import { FC } from 'react';
import styled from 'styled-components';
import { Line } from './Line.tsx';
import { LinkLabel } from './LinkLabel.tsx';

type DegreeProps = {
  startYear: string;
  endYear?: string;
  title: string;
  field: string;
  school: string;
  url: string;
};

const Title = styled.h3`
  margin: 0;
  font: inherit;
  ${({ theme }) => theme.typography({ weight: 'bold' })};
`;

const Years = styled.span`
  ${({ theme }) => theme.typography({ size: 'xsmall', style: 'italic' })};
`;

const NoWrapLinkLabel = styled(LinkLabel)`
  white-space: nowrap;
`;

export const Degree: FC<DegreeProps> = ({
  startYear,
  endYear,
  title,
  field,
  school,
  url,
}) => (
  <>
    <Title>{title}</Title>
    <Line>{field}</Line>
    <Line>
      <NoWrapLinkLabel href={url}>{school}</NoWrapLinkLabel>
    </Line>
    <Line>
      <Years>{`${startYear}${endYear ? `–${endYear}` : ''}`}</Years>
    </Line>
  </>
);
