import Dashboard from "@/components/dashboard/dashboard";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("Profiles")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  return <Dashboard profile={profile} />;
}