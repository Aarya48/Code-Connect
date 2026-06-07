import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function ExploreDevelopers() {
  const [developers, setDevelopers] =
    useState([]);

  const fetchDevelopers = async () => {
    try {
      const response =
        await axios.get(
          "http://localhost:5000/api/users"
        );

      setDevelopers(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Explore Developers
        </h1>

        <p className="text-gray-400 mb-8">
          Discover talented developers and connect.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {developers.map((dev) => (

            <div
              key={dev._id}
              className="
              bg-[#111827]
              border
              border-cyan-500/10
              rounded-3xl
              p-6
              "
            >

              <div className="flex items-center gap-4 mb-4">

                {dev.profileImage ? (

                  <img
                    src={dev.profileImage}
                    alt=""
                    className="
                    w-16
                    h-16
                    rounded-full
                    object-cover
                    "
                  />

                ) : (

                  <div
                    className="
                    w-16
                    h-16
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    to-cyan-500
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    "
                  >
                    {dev.name?.charAt(0)}
                  </div>

                )}

                <div>

                  <h2 className="text-xl font-bold">
                    {dev.name}
                  </h2>

                  <p className="text-gray-400">
                    @{dev.githubUsername}
                  </p>

                </div>

              </div>

              <p className="text-gray-300 mb-4">
                {dev.bio ||
                  "No bio added yet."}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">

                {dev.skills?.map(
                  (skill) => (
                    <span
                      key={skill}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-400
                      text-sm
                      "
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>

              <a
                href={`https://github.com/${dev.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="
                inline-block
                px-4
                py-2
                rounded-xl
                bg-gradient-to-r
                from-purple-500
                to-cyan-500
                "
              >
                View GitHub
              </a>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default ExploreDevelopers;