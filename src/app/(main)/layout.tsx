import { FC, ReactNode } from 'react';

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div>MAIN LAYOUT {children}</div>;
};

export default MainLayout;
