import { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { Line } from './Line.tsx';

type SidebarSectionProps = {
  headline: string;
  children: ReactNode;
};

const SidebarHeadline = styled.span`
  ${({ theme }) => theme.typography({ size: 'medium', weight: 'bold' })};
`;

export const SidebarSection: FC<SidebarSectionProps> = ({
  headline,
  children,
}) => (
  <span>
    <Line>
      <SidebarHeadline>{headline}</SidebarHeadline>
    </Line>
    {children}
  </span>
);
