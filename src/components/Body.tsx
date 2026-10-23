import { FC } from 'react';
import styled from 'styled-components';
import { BodySection } from './BodySection.tsx';
import { BodyItem } from './BodyItem.tsx';
import { Resume } from '../data';

type BodyProps = Pick<Resume, 'experience' | 'projects'>;

const BodyComponent = styled.main`
  flex: 9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`;

export const Body: FC<BodyProps> = ({ experience, projects }) => (
  <BodyComponent>
    <BodySection headline="experience" headlineEmphasisColor="blue">
      {experience.map((entry) => (
        <BodyItem key={`${entry.startYear} ${entry.title}`} {...entry} />
      ))}
    </BodySection>

    <BodySection headline="projects" headlineEmphasisColor="pink">
      {projects.map((entry) => (
        <BodyItem key={`${entry.startYear} ${entry.title}`} {...entry} />
      ))}
    </BodySection>
  </BodyComponent>
);
