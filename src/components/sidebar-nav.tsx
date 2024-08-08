import { Workspace } from '@/types/app';
import { FC } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Typography from './ui/typography';

type SidebarNavProps = {
  userWorkspacesData: Workspace[];
  currentWorkspaceData: Workspace;
};

const SidebarNav: FC<SidebarNavProps> = ({ currentWorkspaceData, userWorkspacesData }) => {
  return (
    <nav>
      <ul className="flex flex-col space-y-4">
        <li>
          <div className="cursor-pointer items-center text-white mb-4 w-10 h-10 rounded-lg overflow-hidden">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar>
                    <AvatarImage
                      src={currentWorkspaceData.image_url || ''}
                      alt={currentWorkspaceData.name}
                      className="object-cover w-full h-full"
                    />
                    <AvatarFallback className="bg-neutral-700">
                      <Typography variant="p" text={currentWorkspaceData.name.slice(0, 2)} />
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNav;
