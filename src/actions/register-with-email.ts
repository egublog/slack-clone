'use server';

import { supabaseServerClient } from '@/supabase/supabaseServer';

/**
 * メールアドレスで登録
 */
export const registerWithEmail = async ({ email }: { email: string }) => {
  const supabase = await supabaseServerClient();

  const response = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: process.env.NEXT_PUBLIC_CURRENT_ORIGIN,
    },
  });

  return JSON.stringify(response);
};
