import Sidebar from "../components/Sidebar";
import { useEffect,useState } from "react";
import axios from "axios";
function MyProjects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
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

  fetchProjects();
}, []);
  return (
    
    <div className="min-h-screen grid grid-cols-5">
      
      {/* Sidebar */}
      <div className="col-span-1">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-4 p-8 bg-[#0B1020] text-white">

        <h1 className="text-2xl font-semibold mb-8">
          My Projects
        </h1>

        <div className="grid grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-[#111827]
                p-6
                rounded-2xl
                border
                border-gray-800
                hover:border-purple-500
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">

                {project.techStack.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-purple-600
                      px-3
                      py-1
                      rounded-full
                      text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default MyProjects;