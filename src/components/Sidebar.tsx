import { FC } from 'react';
import styled from 'styled-components';
import { SidebarSection } from './SidebarSection.tsx';
import { Line } from './Line.tsx';

const SidebarComponent = styled.div`
  flex: 2;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  text-align: end;
  ${({ theme }) => theme.typography({ size: 'small' })};
`;

const LanguageName = styled.span`
  ${({ theme }) => theme.typography({ weight: 'bold' })};
`;

const LanguageLevel = styled.span`
  ${({ theme }) => theme.typography({ style: 'italic' })};
`;

export const Sidebar: FC = () => (
  <SidebarComponent>
    <SidebarSection headline="contact">
      <Line>Hálova 9</Line>
      <Line>Bratislava</Line>
      <Line>851 01</Line>
      <Line>Slovakia</Line>
      <Line />
      <Line>
        <a href="tel:+421948484490">+421 948 484 490</a>
      </Line>
      <Line />
      <Line>
        <a href="mailto:martin@zilak.sk">martin@zilak.sk</a>
      </Line>
      <Line>
        <a href="https://zilak.sk">https://zilak.sk</a>
      </Line>
    </SidebarSection>

    <SidebarSection headline="languages">
      <Line>
        <LanguageName>english</LanguageName>
        &nbsp;
        <LanguageLevel>fluent</LanguageLevel>
      </Line>

      <Line>
        <LanguageName>slovak</LanguageName>
        &nbsp;
        <LanguageLevel>native</LanguageLevel>
      </Line>
    </SidebarSection>

    {/*<SidebarSection headline="skills"></SidebarSection>*/}

    <SidebarSection headline="hobbies">
      <Line>cooking</Line>
      <Line>cycling</Line>
      <Line>reading</Line>
    </SidebarSection>
  </SidebarComponent>
);
