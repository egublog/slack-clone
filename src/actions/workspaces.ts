'use server';

import { supabaseServerClient } from '@/supabase/supabaseServer';

/**
 * ユーザーのワークスペースを更新
 */
export const getUserWorkspaceData = async (workspaceIds: Array<string>) => {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase.from('workspaces').select('*').in('id', workspaceIds);

  return [data, error];
};

/**
 * ワークスペースのデータを取得
 */
export const getCurrentWorkspaceData = async (workspaceId: string) => {
  const supabase = await supabaseServerClient();

  const { data, error } = await supabase
    .from('workspaces')
    .select('*')
    .eq('id', workspaceId)
    .single();

  return [data, error];
};
