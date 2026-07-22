import Link from "next/link";
type ProfileProps = {
  profile: {
    full_name: string;
    university: string;
    department: string;
    faculty: string;
    level: number;
    cgpa: number;
    country: string;
    gender: string;
    preferred_country: string;
  };
};

export default function Profile({ profile }: ProfileProps) {
  return (
    <section className=" rounded-2xl shadow-md p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Student Profile
        </h2>

       <Link href="/profile_update">
         <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
           Edit Profile
         </button>
       </Link>
      </div>

      <div className="space-y-3">

        <p>
          <span className="font-semibold">Full Name:</span>{" "}
          {profile?.full_name}
        </p>

        <p>
          <span className="font-semibold">University:</span>{" "}
          {profile?.university}
        </p>

        <p>
          <span className="font-semibold">Faculty:</span>{" "}
          {profile?.faculty}
        </p>

        <p>
          <span className="font-semibold">Department:</span>{" "}
          {profile?.department}
        </p>

        <p>
          <span className="font-semibold">Level:</span>{" "}
          {profile?.level}
        </p>

        <p>
          <span className="font-semibold">CGPA:</span>{" "}
          {profile?.cgpa}
        </p>

        <p>
          <span className="font-semibold">Country:</span>{" "}
          {profile?.country}
        </p>

        <p>
          <span className="font-semibold">Gender:</span>{" "}
          {profile?.gender}
        </p>

        <p>
          <span className="font-semibold">Preferred Study Country:</span>{" "}
          {profile?.preferred_country}
        </p>

      </div>

    </section>
  );
}