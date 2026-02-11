'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { SessionProvider } from './session-provider';
import { NextIntlClientProvider, useMessages } from 'next-intl';

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  const messages = useMessages();

  return (
    <SessionProvider>
      <NextIntlClientProvider messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
