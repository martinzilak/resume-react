import { FC } from 'react';
import { Line } from './Line.tsx';
import styled from 'styled-components';

type SkillProps = {
  name: string;
  levelOutOf3: number;
};

const Stars = styled.span`
  ${({ theme }) => theme.typography({ size: 'small' })};
  vertical-align: text-top;
`;

const showSkillLevel = (levelOutOf3: number): string => {
  const emptyCount = Math.max(3 - levelOutOf3, 0);
  const fullCount = 3 - emptyCount;

  return `${'★'.repeat(fullCount)}${'☆'.repeat(emptyCount)}`;
};

export const Skill: FC<SkillProps> = ({ name, levelOutOf3 }) => (
  <Line>
    {name}&nbsp;<Stars>{showSkillLevel(levelOutOf3)}</Stars>
  </Line>
);
