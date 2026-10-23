import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { LinkLabel } from './LinkLabel.tsx';
import { Entry as BodyItemProps } from '../data';

const Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3rem;
  ${({ theme }) => theme.typography({ size: 'small' })};
`;

const DurationColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const DescriptionColumn = styled.div`
  flex: 11;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //gap: 0.25rem;
`;

const TitleRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const DurationComponent = styled.span`
  ${({ theme }) => theme.typography({ size: 'xsmall', style: 'italic' })};
`;

const TitleComponent = styled.h3`
  margin: 0;
  font: inherit;
  ${({ theme }) => theme.typography({ weight: 'bold' })};
`;

const DescriptionComponent = styled.span`
  text-align: start;
`;

const NoteComponent = styled.span`
  ${({ theme }) => theme.typography({ size: 'xsmall', style: 'italic' })};
  white-space: nowrap;
`;

export const BodyItem: FC<BodyItemProps> = ({
  startYear,
  endYear,
  duration,
  title,
  description,
  note,
  links,
}) => (
  <Wrapper>
    <DurationColumn>
      <span>{`${startYear}${endYear ? `–${endYear}` : ''}`}</span>
      {duration && <DurationComponent>{duration}</DurationComponent>}
    </DurationColumn>

    <DescriptionColumn>
      <TitleRow>
        <TitleComponent>{title}</TitleComponent>

        <span>
          {links.map((link, index) => (
            <Fragment key={link.url}>
              <LinkLabel href={link.url}>{link.title}</LinkLabel>
              {index < links.length - 1 && <span>{', '}</span>}
            </Fragment>
          ))}
        </span>
      </TitleRow>

      {description && (
        <DescriptionComponent>
          {description}

          {note && (
            <>
              &nbsp;
              <NoteComponent>{`(${note})`}</NoteComponent>
            </>
          )}
        </DescriptionComponent>
      )}
    </DescriptionColumn>
  </Wrapper>
);
