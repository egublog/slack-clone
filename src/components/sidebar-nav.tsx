import { Workspace } from '@/types/app';
import { FC } from 'react';

type SidebarNavProps = {
  userWorkspacesData: Workspace[];
  currentWorkspaceData: Workspace;
};

const SidebarNav: FC<SidebarNavProps> = () => {
  return (
    <nav>
      <ul className="flex flex-col space-y-4">
        <li>
          <div className="cursor-pointer items-center text-white mb-4 w-10 h-10 rounded-lg overflow-hidden">
            slack
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
