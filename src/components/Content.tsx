import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type ContentProps = {
  sidebar: ReactNode;
  body: ReactNode;
};

const ContentComponent = styled.div`
  flex: 9;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const Content: FC<ContentProps> = ({ sidebar, body }) => (
  <ContentComponent>
    {sidebar}

    {body}
  </ContentComponent>
);
