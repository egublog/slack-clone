import { User, Workspace } from '@/types/app';
import SidebarNav from './sidebar-nav';
import { FiPlus } from 'react-icons/fi';
import { Tooltip, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover } from '@/components/ui/popover';
import Image from 'next/image';

type SidebarProps = {
  userWorkspacesData: Workspace[];
  currentWorkspaceData: Workspace;
  userData: User;
};

/**
 * サイドバー
 */
const Sidebar = ({ userWorkspacesData, currentWorkspaceData, userData }: SidebarProps) => {
  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        pt-[68px]
        pb-8
        z-30
        flex
        flex-col
        justify-between
        items-center
        h-screen
        w-20
    `}
    >
      <SidebarNav
        currentWorkspaceData={currentWorkspaceData}
        userWorkspacesData={userWorkspacesData}
      />

      <div className="flex flex-col space-y-3">
        <div
          className={`
          bg-[rgba(255,255,255,0.3)]
          cursor-pointer
          transition-all
          duration-300
          hover:scale-110
          text-white
          grid place-content-center rounded-full w-10 h-10
          `}
        >
          <FiPlus size={28} />
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Popover>
                  <div className="h-10 w-10 relative cursor-pointer">
                    <div className="h-full w-full rounded-lg overflow-hidden">
                      <Image
                        className="object-cover w-full h-full"
                        src={userData.avatar_url}
                        alt={userData.name || 'user'}
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </Popover>
              </div>
            </TooltipTrigger>
          </Tooltip>
        </TooltipProvider>
      </div>
    </aside>
  );
};
export default Sidebar;
