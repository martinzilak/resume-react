export declare const renderPdf: (
  url: string
) => Promise<{ fileName: string; bytes: Uint8Array }>;
