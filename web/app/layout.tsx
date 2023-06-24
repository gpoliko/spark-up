'use client';

import { SharedHeader } from '@/components/SharedHeader/SharedHeader';
import SharedLayout from '@/components/SharedLayout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SharedLayout>
      <SharedHeader />
      {children}
    </SharedLayout>
  );
}
