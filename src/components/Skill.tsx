import { FC, useId } from 'react';
import { Line } from './Line.tsx';
import styled from 'styled-components';

type SkillProps = {
  name: string;
  levelOutOf3: number;
  lastUsed?: string;
};

const Stars = styled.span`
  white-space: nowrap;
`;

// Drawn as SVG so the PDF export does not depend on a system font having the star glyphs.
const StarIcon = styled.svg`
  width: 1em;
  height: 1em;
  vertical-align: 0.06em;
  margin: 0.05em 0;
`;

const STAR_PATH =
  'M12 2.95L14.80 10.45L22.80 10.80L16.54 15.78L18.68 23.50L12 19.08L5.32 23.50L7.46 15.78L1.20 10.80L9.20 10.45Z';

const Star: FC<{ filled: boolean }> = ({ filled }) => {
  const clipId = useId().replace(/:/g, '');

  return (
    <StarIcon viewBox="0 0 24 24" aria-hidden>
      {filled ? (
        <path d={STAR_PATH} fill="currentColor" />
      ) : (
        // The outline is clipped to the star's shape so it only grows inwards, keeping the
        // empty star the same size as the filled ones.
        <>
          <clipPath id={clipId}>
            <path d={STAR_PATH} />
          </clipPath>
          <path
            d={STAR_PATH}
            fill="none"
            stroke="currentColor"
            strokeWidth={3.2}
            strokeLinejoin="round"
            clipPath={`url(#${clipId})`}
          />
        </>
      )}
    </StarIcon>
  );
};

const LastUsed = styled.span`
  ${({ theme }) => theme.typography({ size: 'xsmall', style: 'italic' })};
`;

const showSkillLevel = (levelOutOf3: number) =>
  [0, 1, 2].map((index) => <Star key={index} filled={index < levelOutOf3} />);

export const Skill: FC<SkillProps> = ({ name, levelOutOf3, lastUsed }) => (
  <Line>
    {lastUsed && <LastUsed>{lastUsed}&nbsp;</LastUsed>}
    {name}&nbsp;
    <Stars role="img" aria-label={`${levelOutOf3} out of 3`}>
      {showSkillLevel(levelOutOf3)}
    </Stars>
  </Line>
);
