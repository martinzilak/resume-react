import styled from 'styled-components';

export const LinkLabel = styled.a`
  ${({ theme }) => theme.typography({ size: 'xsmall' })};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;
