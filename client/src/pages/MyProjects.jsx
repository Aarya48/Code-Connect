import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
function MyProjects() {
  const [projects, setProjects] = useState([]);
const navigate = useNavigate();
  const fetchProjects = async () => {
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

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
const handleDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await axios.delete(
      `http://localhost:5000/api/projects/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProjects(
      projects.filter(
        (project) => project._id !== id
      )
    );

  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              My Projects
            </h1>

            <p className="text-gray-400 mt-2">
              Manage and showcase your projects.
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div
            className="
            flex
            flex-col
            items-center
            justify-center
            mt-32
            text-center
            "
          >
            <h2 className="text-3xl font-bold">
              No Projects Yet 🚀
            </h2>

            <p className="text-gray-400 mt-3">
              Create your first project and
              showcase your work.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {projects.map((project) => (
              <div
                key={project._id}
                className="
                bg-[#111827]
                border
                border-cyan-500/10
                rounded-3xl
                p-6
                hover:border-cyan-500/30
                transition-all
                "
              >
                <h2 className="text-2xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/10
                      text-cyan-400
                      text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mb-6">

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      px-4
                      py-2
                      rounded-xl
                      bg-purple-500/10
                      text-purple-400
                      hover:bg-purple-500/20
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      px-4
                      py-2
                      rounded-xl
                      bg-cyan-500/10
                      text-cyan-400
                      hover:bg-cyan-500/20
                      "
                    >
                      Live Demo
                    </a>
                  )}

                </div>
<div className="flex gap-3">

  <button
    onClick={() =>
      navigate(`/projects/edit/${project._id}`)
    }
    className="
    flex-1
    py-2
    rounded-xl
    bg-purple-500/10
    text-purple-400
    "
  >
    Edit
  </button>

  <button
    onClick={() =>
      handleDelete(project._id)
    }
    className="
    flex-1
    py-2
    rounded-xl
    bg-red-500/10
    text-red-400
    "
  >
    Delete
  </button>

</div>
                {/* Footer */}
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-gray-500 text-sm">
                    Created by {project.owner?.name}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}
      </main>
    </div>
  );
}

export default MyProjects;