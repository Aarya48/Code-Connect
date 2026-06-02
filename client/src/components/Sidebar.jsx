import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="h-screen bg-[#111827] text-white p-6">

      <h1 className="text-2xl font-bold text-purple-500">
        CodeConnect
      </h1>

      <div className="mt-10 space-y-4">

        <p className="bg-purple-600/20 text-purple-400 p-3 hover:scale-105  rounded-xl">
          Dashboard
        </p>

        <p className="hover:scale-105 transition-all duration-300  " onClick={()=>{
          navigate("/my-projects")
        }}>My Projects</p>

        <p className="hover:scale-105 transition-all duration-300" >Profile</p>

        <button onClick={logout} className="hover:scale-105 transition-all duration-300 ">
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;