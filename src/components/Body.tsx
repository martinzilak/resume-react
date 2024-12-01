import { FC } from 'react';
import styled from 'styled-components';

const BodyComponent = styled.div`
  flex: 7;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Body: FC = () => <BodyComponent>sdasfsaf</BodyComponent>;
