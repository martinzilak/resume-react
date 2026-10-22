import { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { FontColor } from '../styles';

type BodySectionProps = {
  headline: string;
  headlineEmphasisColor: FontColor;
  headlineEmphasisLengthFromStart?: number;
  children: ReactNode;
};

const BodySectionComponent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.75rem;
`;

const SectionHeadline = styled.h2`
  margin: 0;
  font: inherit;
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
    <SectionHeadline>
      <EmphasizedBodyHeadlinePart color={headlineEmphasisColor}>
        {headline.slice(0, headlineEmphasisLengthFromStart)}
      </EmphasizedBodyHeadlinePart>
      <BodyHeadline>
        {headline.slice(headlineEmphasisLengthFromStart, headline.length)}
      </BodyHeadline>
    </SectionHeadline>

    {children}
  </BodySectionComponent>
);
