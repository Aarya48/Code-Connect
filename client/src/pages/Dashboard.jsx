import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen grid grid-cols-5">

      <div className="col-span-1">
        <Sidebar />
      </div>

      <div className="col-span-4 p-8 bg-[#0B1020] text-white">

        <div className="flex justify-between items-center mb-10">

          <input
            type="text"
            placeholder="Search projects..."
            className="
              bg-[#111827]
              border border-gray-800
              rounded-xl
              px-4 py-3
              w-96
              text-white
              outline-none
            "
          />

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
              A
            </div>

            <p className="font-semibold">Aarya</p>
          </div>

        </div>

        <h1 className="text-2xl font-semibold">
          Welcome Back!
        </h1>

        <div className="grid grid-cols-4 gap-6 mt-8">

          <StatsCard title="Projects" value="5" />
          <StatsCard title="Skills" value="12" />
          <StatsCard title="Profile Score" value="90%" />
          <StatsCard title="Connections" value="20" />
          <div className="mt-12">

  <h2 className="text-lg font-semibold mb-6">
    Recent Projects
  </h2>

  <div className="grid grid-cols-2 gap-50">

    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 w-50 h-80">

      <h3 className="text-lg font-semibold">
        CodeConnect
      </h3>

      <p className="text-gray-400 mt-2">
        Developer networking platform built with MERN.
      </p>

      <div className="flex  flex-wrap gap-2 mt-4">

        <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">
          Node.js
        </span>

        <span className="bg-green-600 px-3 py-1 rounded-full text-sm">
          MongoDB
        </span>

      </div>

    </div>

    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800 w-50 h-80 ">

      <h3 className="text-lg font-semibold">
        Traffic Predictor
      </h3>

      <p className="text-gray-400 mt-2">
        AI-powered traffic prediction system.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">

        <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
          Python
        </span>

        <span className="bg-cyan-600 px-3 py-1 rounded-full text-sm">
          ML
        </span>

      </div>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;