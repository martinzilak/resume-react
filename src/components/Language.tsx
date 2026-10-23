import { FC } from 'react';
import styled from 'styled-components';
import { Line } from './Line.tsx';
import { Language as LanguageProps } from '../data';

const Name = styled.span`
  ${({ theme }) => theme.typography({ weight: 'bold' })};
`;

const Level = styled.span`
  ${({ theme }) => theme.typography({ style: 'italic' })};
`;

export const Language: FC<LanguageProps> = ({ name, level }) => (
  <Line>
    <Name>{name}</Name>
    &nbsp;
    <Level>{level}</Level>
  </Line>
);
