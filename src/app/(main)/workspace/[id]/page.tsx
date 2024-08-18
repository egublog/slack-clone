import { getUserData } from '@/actions/get-user-data';
import { getCurrentWorkspaceData, getUserWorkspaceData } from '@/actions/workspaces';
import InfoSection from '@/components/info-section';
import Sidebar from '@/components/sidebar';
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
      </div>
      <div className="md:hidden block min-h-screen">Mobile</div>
    </>
  );
};

export default Workspace;
