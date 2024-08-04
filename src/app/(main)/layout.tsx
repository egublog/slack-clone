import { ColorPreferencesProvider } from '@/providers/color-preferences';
import { ThemeProvider } from '@/providers/theme-provider';
import { FC, ReactNode } from 'react';

/**
 * メインレイアウト
 */
const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ColorPreferencesProvider>MainLayout {children}</ColorPreferencesProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
