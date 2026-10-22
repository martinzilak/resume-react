import { FC } from 'react';
import styled from 'styled-components';
import { SidebarSection } from './SidebarSection.tsx';
import { Line } from './Line.tsx';
import { Skill } from './Skill.tsx';
import { Degree } from './Degree.tsx';

const SidebarComponent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  text-align: end;
  ${({ theme }) => theme.typography({ size: 'small' })};
`;

const NoWrap = styled.span`
  white-space: nowrap;
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
        <NoWrap>
          <a href="tel:+421948484490">+421 948 484 490</a>
        </NoWrap>
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

    <SidebarSection headline="skills">
      <Skill name="TypeScript" levelOutOf3={3} />
      <Skill name="JavaScript" levelOutOf3={3} />
      <Skill name="React" levelOutOf3={3} />
      <Skill name="React&nbsp;Native" levelOutOf3={3} />
      <Skill name="Expo" levelOutOf3={3} />
      <Skill name="Kotlin" levelOutOf3={3} lastUsed="2023" />
      <Skill name="Java" levelOutOf3={3} lastUsed="2023" />
      <Skill name="SQL" levelOutOf3={2} lastUsed="2023" />
    </SidebarSection>

    <SidebarSection headline="education">
      <Degree
        startYear="2017"
        endYear="2020"
        title="Master's Degree"
        field="Computer Science"
        school="Masaryk University"
        url="https://is.muni.cz/obory/3148?fakulta=1433;lang=en;setlang=en"
      />
      <Line />

      <Degree
        startYear="2018"
        title="Erasmus+"
        field="CS & Management"
        school="University of Pavia"
        url="https://portale.unipv.it/en"
      />
      <Line />

      <Degree
        startYear="2014"
        endYear="2017"
        title="Bachelor's Degree"
        field="Computer Science"
        school="Masaryk University"
        url="https://is.muni.cz/obory/3142?fakulta=1433;lang=en;setlang=en"
      />
    </SidebarSection>

    <SidebarSection headline="hobbies">
      <Line>cooking</Line>
      <Line>cycling</Line>
      <Line>reading</Line>
    </SidebarSection>
  </SidebarComponent>
);
