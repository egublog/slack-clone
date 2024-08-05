import { User, Workspace } from '@/types/app';
import { FC } from 'react';

type SidebarProps = {
  userWorkspacesData: Workspace[];
  currentWorkspaceData: Workspace;
  userData: User;
};

const Sidebar: FC<SidebarProps> = ({ userWorkspacesData, currentWorkspaceData, userData }) => {
  return <aside></aside>;
};
export default Sidebar;
