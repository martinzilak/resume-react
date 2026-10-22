import { ReactNode, FC } from 'react';
import styled from 'styled-components';

type A4PageProps = {
  children?: ReactNode;
};

const A4PageComponent = styled.div`
  width: 595px;
  height: 841px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  padding: 0 1.5rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // The page is laid out in points (595pt = 210mm), browsers use CSS pixels (210mm ≈ 793.7px).
  // Zooming on screen too keeps the on-screen layout identical to the printed one.
  zoom: 1.3339;

  @media print {
    margin: 0;
    box-shadow: none;
    overflow: hidden;
  }
`;

export const A4Page: FC<A4PageProps> = ({ children }) => (
  <A4PageComponent>{children}</A4PageComponent>
);
