import { FC } from 'react';
import styled from 'styled-components';
import { Line } from './Line.tsx';
import { Contact as ContactProps } from '../data';

const NoWrap = styled.span`
  white-space: nowrap;
`;

export const Contact: FC<ContactProps> = ({
  address,
  phone,
  email,
  website,
}) => (
  <>
    {address.map((line) => (
      <Line key={line}>{line}</Line>
    ))}
    <Line />
    <Line>
      <NoWrap>
        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
      </NoWrap>
    </Line>
    <Line />
    <Line>
      <a href={`mailto:${email}`}>{email}</a>
    </Line>
    <Line>
      <a href={website}>{website}</a>
    </Line>
  </>
);
