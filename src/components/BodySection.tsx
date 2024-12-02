import { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { Line } from './Line.tsx';
import { FontColor } from '../styles';

type BodySectionProps = {
  headline: string;
  headlineEmphasisColor: FontColor;
  headlineEmphasisLengthFromStart?: number;
  children: ReactNode;
};

const BodySectionComponent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const BodyHeadline = styled.span`
  ${({ theme }) => theme.typography({ size: 'mlarge', weight: 'bold' })};
`;

const EmphasizedBodyHeadlinePart = styled(BodyHeadline)<{ color: FontColor }>`
  ${({ theme, color }) => theme.typography({ color })};
`;

export const BodySection: FC<BodySectionProps> = ({
  headline,
  headlineEmphasisColor,
  headlineEmphasisLengthFromStart = 3,
  children,
}) => (
  <BodySectionComponent>
    <Line>
      <EmphasizedBodyHeadlinePart color={headlineEmphasisColor}>
        {headline.slice(0, headlineEmphasisLengthFromStart)}
      </EmphasizedBodyHeadlinePart>
      <BodyHeadline>
        {headline.slice(headlineEmphasisLengthFromStart, headline.length)}
      </BodyHeadline>
    </Line>

    {children}
  </BodySectionComponent>
);
