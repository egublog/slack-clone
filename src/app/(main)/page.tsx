import { getUserData } from '@/actions/get-user-data';
import { redirect } from 'next/navigation';

/**
 * ユーザーのデータを取得し、適切なページにリダイレクトするためのコンポーネント
 * - ユーザーデータがない場合、認証ページにリダイレクト
 * - ワークスペースIDがない場合、ワークスペース作成ページにリダイレクト
 * - ワークスペースIDがある場合、該当のワークスペースページにリダイレクト
 */
export default async function Home() {
  const userData = await getUserData();

  if (!userData) return redirect('/auth');

  const userWorkspaceId = userData.workspaces?.[0];

  if (!userWorkspaceId) return redirect('/create-workspace');

  if (userWorkspaceId) return redirect(`/workspace/${userWorkspaceId}`);
}
