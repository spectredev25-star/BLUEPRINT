import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Welcome from "./Welcome";
import Profile from "./Profile";

type DashboardProps = {
  profile: any;
};

export default function Dashboard({ profile }: DashboardProps) {
  return (
    <div className="flex min-h-screen dashboard">

      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">

        {/* Top Navigation */}
        <Topbar />

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">

          {/* Welcome Section */}
          <Welcome profile={profile} />

          {/* Student Profile */}
          <Profile profile={profile} />

          {/* Scholarship Matches */}
          <section className=" rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">
              Recommended Scholarships
            </h2>

            <p className="text-gray-500">
              Scholarship recommendations will appear here after your profile is complete.
            </p>
          </section>

        </div>

      </main>
    </div>
  );
}