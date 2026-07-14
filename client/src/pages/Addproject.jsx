import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function Addproject(){
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



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5000/api/projects",
      {
        title: project.title,
        description: project.description,
        techStack: project.techStack
          .split(",")
          .map((tech) => tech.trim()),
        githubLink: project.githubLink,
        liveLink: project.liveLink,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Project Created Successfully 🚀");

    navigate("/my-projects");

  } catch (error) {
    console.log(error);
    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );
  }
};
  return (
  <div className="flex min-h-screen bg-[#0B1020] text-white">

    <Sidebar />

    <main className="flex-1 p-8 flex justify-center items-start">

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
          Add Project
        </h1>

        <p className="text-gray-400 mb-8">
          Showcase your work and find collaborators.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <div>
            <label className="block mb-2 text-gray-400">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
              placeholder="Nebula OS"
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
          </div>

          <div>
            <label className="block mb-2 text-gray-400">
              Description
            </label>

            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows="5"
              placeholder="Describe your project..."
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
          </div>

          <div>
            <label className="block mb-2 text-gray-400">
              Tech Stack
            </label>

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
          </div>

          <div>
            <label className="block mb-2 text-gray-400">
              GitHub Repository
            </label>

            <input
              type="text"
              name="githubLink"
              value={project.githubLink}
              onChange={handleChange}
              placeholder="https://github.com/..."
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
          </div>

          <div>
            <label className="block mb-2 text-gray-400">
              Live Demo Link
            </label>

            <input
              type="text"
              name="liveLink"
              value={project.liveLink}
              onChange={handleChange}
              placeholder="https://your-project.vercel.app"
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
          </div>

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
            Create Project
          </button>

        </form>

      </div>

    </main>

  </div>
);
};

export default Addproject;