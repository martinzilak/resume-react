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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const A4Page: FC<A4PageProps> = ({ children }) => (
  <A4PageComponent>{children}</A4PageComponent>
);
