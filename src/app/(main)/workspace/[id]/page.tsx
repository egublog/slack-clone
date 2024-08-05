import { getUserData } from '@/actions/get-user-data';
import { getCurrentWorkspaceData, getUserWorkspaceData } from '@/actions/workspaces';
import { redirect } from 'next/navigation';

const Workspace = async ({ params: { id } }: { params: { id: string } }) => {
  const userData = await getUserData();

  if (!userData) return redirect('/auth');

  const [userWorkspaceData, useWorkspaceError] = await getUserWorkspaceData(userData.workspaces!);

  const [currentWorkspaceData, currentWorkspaceError] = await getCurrentWorkspaceData(id);

  return (
    <div>
      <h1>Workspace</h1>
    </div>
  );
};

export default Workspace;
