import { getUserData } from '@/actions/get-user-data';
import { getCurrentWorkspaceData, getUserWorkspaceData } from '@/actions/workspaces';
import InfoSection from '@/components/info-section';
import Sidebar from '@/components/sidebar';
import Typography from '@/components/ui/typography';
import { Workspace as UserWorkspace } from '@/types/app';
import { redirect } from 'next/navigation';

/**
 * ワークスペースページ
 */
const Workspace = async ({ params: { id } }: { params: { id: string } }) => {
  const userData = await getUserData();

  if (!userData) return redirect('/auth');

  const [userWorkspaceData, useWorkspaceError] = await getUserWorkspaceData(userData.workspaces!);

  const [currentWorkspaceData, currentWorkspaceError] = await getCurrentWorkspaceData(id);

  return (
    <>
      <div className="hidden md:block">
        <Sidebar
          currentWorkspaceData={currentWorkspaceData}
          userData={userData}
          userWorkspacesData={userWorkspaceData as UserWorkspace[]}
        />
        <InfoSection />
        Workspace
        <Typography text="HELLO WORLD" variant="h1" />
        <Typography text="HELLO WORLD" variant="h2" />
        <Typography text="HELLO WORLD" variant="h3" />
        <Typography text="HELLO WORLD" variant="h4" />
        <Typography text="HELLO WORLD" variant="h5" />
        <Typography text="HELLO WORLD" variant="h6" />
        <Typography text="HELLO WORLD" variant="p" />
      </div>
      <div className="md:hidden block min-h-screen">Mobile</div>
    </>
  );
};

export default Workspace;
