import { FC, ReactNode } from 'react';

/**
 * メインレイアウト
 */
const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <h1>Main Layout</h1>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
