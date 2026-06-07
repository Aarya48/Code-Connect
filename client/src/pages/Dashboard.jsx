import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import axios from "axios";
function Dashboard() {
  const [projectCount, setProjectCount] = useState(0);  
  const fetchProjectCount = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/projects/my-projects",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProjectCount(response.data.length);

  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchProjectCount();
}, []);
    const navigate = useNavigate();
  const stats = [
    { title: "Projects", value: projectCount },
    { title: "Connections", value: "48" },
    { title: "Collaborations", value: "6" },
    { title: "Profile Views", value: "321" },
  ];

  const opportunities = [
    {
      role: "React Developer",
      project: "TechNova",
    },
    {
      role: "UI Designer",
      project: "MedSync",
    },
    {
      role: "Backend Engineer",
      project: "FinTrack AI",
    },
  ];

  const developers = [
    {
      name: "Aryan Sharma",
      skills: "React • Node.js",
    },
    {
      name: "Riya Kapoor",
      skills: "UI/UX • Figma",
    },
    {
      name: "Aditya Rao",
      skills: "Python • AI",
    },
  ];
  const [user, setUser] = useState(null);
  const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setUser(response.data);
   

  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchProfile();
}, []);

  if (!user) return null;

   return (
  <div className="flex min-h-screen bg-[#0B1020] text-white">

    <Sidebar />

    <main className="flex-1 p-8">

      {/* Welcome */}

      <div
        className="
        bg-[#111827]
        border border-cyan-500/10
        rounded-3xl
        p-8
        mb-8
        flex
        justify-between
        items-center
        "
      >
        <div>
          <h1 className="text-4xl font-semi~bold mb-2">
            Welcome Back, {user.name} 
          </h1>

          <p className="text-gray-400 text-lg">
            GitHub: {user.githubUsername}
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/projects/create")}
              className="
              px-6 py-3 rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              "
            >
              Add Project
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="
              px-6 py-3 rounded-xl
              border border-cyan-500/20
              "
            >
              Update Profile
            </button>
          </div>
        </div>

        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt=""
            className="
            w-28 h-28
            rounded-full
            object-cover
            "
          />
        ) : (
          <div
            className="
            w-28 h-28
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-cyan-500
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            "
          >
            {user.name?.charAt(0)}
          </div>
        )}
      </div>

      {/* Stats */}

      <div
        className="
        bg-[#111827]
        border border-cyan-500/10
        rounded-3xl
        p-8
        mb-8
        grid
        grid-cols-4
        "
      >
        <div>
          <p className="text-gray-400">
            Projects
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {projectCount}
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Skills
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {user.skills?.length || 0}
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Posts
          </p>

          <h2 className="text-4xl font-bold mt-2">
            0
          </h2>
        </div>

        <div>
          <p className="text-gray-400">
            Profile
          </p>

          <h2 className="text-4xl font-bold mt-2">
            80%
          </h2>
        </div>
      </div>

      {/* Bottom Grid */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recent Projects */}

        <div
          className="
          lg:col-span-2
          bg-[#111827]
          border border-cyan-500/10
          rounded-3xl
          p-6
          "
        >
          <h2 className="text-2xl font-bold mb-5">
            Recent Projects
          </h2>

          <div className="space-y-4">

            <div className="p-4 rounded-xl bg-[#0B1020]">
              Nebula OS
            </div>

            <div className="p-4 rounded-xl bg-[#0B1020]">
              CodeConnect
            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="space-y-6">

          <div
            className="
            bg-[#111827]
            border border-cyan-500/10
            rounded-3xl
            p-6
            "
          >
            <h2 className="text-xl font-bold mb-4">
              Top Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {user.skills?.map((skill) => (
                <span
                  key={skill}
                  className="
                  px-3 py-1
                  rounded-full
                  bg-cyan-500/10
                  text-cyan-400
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className="
            bg-[#111827]
            border border-cyan-500/10
            rounded-3xl
            p-6
            "
          >
            <h2 className="text-xl font-bold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-3 text-gray-400">
              <li>Added a project</li>
              <li>Updated profile</li>
              <li>Joined community</li>
            </ul>
          </div>

        </div>

      </div>

    </main>

  </div>
);
}

export default Dashboard;