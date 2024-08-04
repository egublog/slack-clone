import { ThemeProvider } from '@/providers/theme-provider';
import { FC, ReactNode } from 'react';

/**
 * メインレイアウト
 */
const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <h1>Main Layout</h1>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default MainLayout;
