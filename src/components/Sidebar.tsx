import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { SidebarSection } from './SidebarSection.tsx';
import { Line } from './Line.tsx';
import { Contact } from './Contact.tsx';
import { Language } from './Language.tsx';
import { Skill } from './Skill.tsx';
import { Degree } from './Degree.tsx';
import { Resume } from '../data';

type SidebarProps = Pick<
  Resume,
  'contact' | 'languages' | 'skills' | 'education' | 'hobbies'
>;

const SidebarComponent = styled.aside`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1rem;
  text-align: end;
  ${({ theme }) => theme.typography({ size: 'small' })};
`;

export const Sidebar: FC<SidebarProps> = ({
  contact,
  languages,
  skills,
  education,
  hobbies,
}) => (
  <SidebarComponent>
    <SidebarSection headline="contact">
      <Contact {...contact} />
    </SidebarSection>

    <SidebarSection headline="languages">
      {languages.map((language) => (
        <Language key={language.name} {...language} />
      ))}
    </SidebarSection>

    <SidebarSection headline="skills">
      {skills.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </SidebarSection>

    <SidebarSection headline="education">
      {education.map((degree, index) => (
        <Fragment key={degree.url}>
          {index > 0 && <Line />}
          <Degree {...degree} />
        </Fragment>
      ))}
    </SidebarSection>

    <SidebarSection headline="hobbies">
      {hobbies.map((hobby) => (
        <Line key={hobby}>{hobby}</Line>
      ))}
    </SidebarSection>
  </SidebarComponent>
);
