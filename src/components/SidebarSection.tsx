import { ReactNode, FC } from 'react';
import styled from 'styled-components';

type SidebarSectionProps = {
  headline: string;
  children: ReactNode;
};

const SidebarHeadline = styled.h2`
  margin: 0;
  font: inherit;
  ${({ theme }) => theme.typography({ size: 'medium', weight: 'bold' })};
`;

export const SidebarSection: FC<SidebarSectionProps> = ({
  headline,
  children,
}) => (
  <section>
    <SidebarHeadline>{headline}</SidebarHeadline>
    {children}
  </section>
);
