import { ReactNode, FC } from 'react';

type LineProps = {
  children?: ReactNode;
};

export const Line: FC<LineProps> = ({ children }) => (
  <>
    {children}
    <br />
  </>
);
