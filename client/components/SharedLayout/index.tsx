'use client';

import { Global } from '@mantine/core';

import { MantineStyleProvider } from './SharedLayout';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <MantineStyleProvider>
          <Global styles={{ body: { margin: 0 } }} />
          {children}
        </MantineStyleProvider>
      </body>
    </html>
  );
}
