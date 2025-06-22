// app/ClientLayout.tsx
'use client'

import { useEffect } from "react";
import { supabase } from "./lib/supabaseClient";
import { useAuthStore } from "./store/authStore";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [setUser]);

  return <>{children}</>;
}
