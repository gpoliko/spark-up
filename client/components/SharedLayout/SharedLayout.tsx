'use client';

import { CacheProvider } from '@emotion/react';
import { useServerInsertedHTML } from 'next/navigation';
import { MantineProvider, useEmotionCache } from '@mantine/core';

export function MantineStyleProvider({ children }: { children: React.ReactNode }) {
  const cache = useEmotionCache();

  useServerInsertedHTML(() => (
    <style
      data-emotion-css={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(''),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
