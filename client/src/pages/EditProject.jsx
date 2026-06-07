import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const fetchProject = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/projects/${id}`
      );

      setProject({
        title: response.data.title,
        description: response.data.description,
        techStack:
          response.data.techStack.join(", "),
        githubLink:
          response.data.githubLink || "",
        liveLink:
          response.data.liveLink || "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/api/projects/${id}`,
        {
          title: project.title,
          description: project.description,

          techStack:
            project.techStack
              .split(",")
              .map((tech) =>
                tech.trim()
              ),

          githubLink:
            project.githubLink,

          liveLink:
            project.liveLink,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Project Updated Successfully 🚀"
      );

      navigate("/my-projects");

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <main className="flex-1 p-8 flex justify-center">

        <div
          className="
          w-full
          max-w-4xl
          bg-[#111827]
          border
          border-cyan-500/10
          rounded-3xl
          p-8
          "
        >

          <h1 className="text-4xl font-bold mb-2">
            Edit Project
          </h1>

          <p className="text-gray-400 mb-8">
            Update your project details.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Project Title"
              className="
              w-full
              p-4
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              outline-none
              "
            />

            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows="5"
              placeholder="Description"
              className="
              w-full
              p-4
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              outline-none
              resize-none
              "
            />

            <input
              type="text"
              name="techStack"
              value={project.techStack}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              className="
              w-full
              p-4
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              outline-none
              "
            />

            <input
              type="text"
              name="githubLink"
              value={project.githubLink}
              onChange={handleChange}
              placeholder="GitHub Link"
              className="
              w-full
              p-4
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              outline-none
              "
            />

            <input
              type="text"
              name="liveLink"
              value={project.liveLink}
              onChange={handleChange}
              placeholder="Live Demo Link"
              className="
              w-full
              p-4
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              outline-none
              "
            />

            <button
              type="submit"
              className="
              mt-4
              py-4
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              font-semibold
              hover:scale-[1.01]
              transition-all
              "
            >
              Save Changes
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default EditProject;