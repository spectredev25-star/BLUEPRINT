type WelcomeProps = {
  profile: any;
};

export default function Welcome({ profile }: WelcomeProps) {
  return (
    <section className=" rounded-xl shadow-sm p-6 welcome-card">
      <h1 className="text-3xl font-bold">
        Welcome back, {profile?.full_name ?? "Student"} 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Here are your latest scholarship opportunities.
      </p>
    </section>
  );
}