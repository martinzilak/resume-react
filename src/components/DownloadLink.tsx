import { FC } from 'react';
import styled from 'styled-components';
import { LinkLabel } from './LinkLabel.tsx';

// Generated into dist/ by scripts/export-pdf.mjs during the build, which also reads it from here.
const PDF_FILE_NAME = 'martin-zilak-resume.pdf';

const Bar = styled.nav`
  width: 210mm;
  margin: 0 auto 0.75rem;
  display: flex;
  justify-content: flex-end;

  // Where there is room beside the page, sit in the top right corner, level with the page's top edge
  // (the body's default 8px margin).
  @media (min-width: 1100px) {
    position: absolute;
    top: 8px;
    right: 16px;
    width: auto;
    margin: 0;
  }

  @media print {
    display: none;
  }
`;

const Button = styled(LinkLabel)`
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGray};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DownloadLink: FC = () => (
  <Bar>
    <Button
      href={`${import.meta.env.BASE_URL}${PDF_FILE_NAME}`}
      download={PDF_FILE_NAME}
    >
      Download PDF
    </Button>
  </Bar>
);
