import {
  LayoutDashboard,
  User,
  FolderKanban,
  PlusSquare,
  Users,
  Search,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("token");

  navigate("/login");
};
  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/dashboard",
    },
    {
      name: "My Profile",
      icon: <User size={20} />,
      path: "/profile",
    },
    {
      name: "My Projects",
      icon: <FolderKanban size={20} />,
      path: "/my-projects",
    },
    {
      name: "Add Project",
      icon: <PlusSquare size={20} />,
      path: "/projects/create",
    },
    {
      name: "Community",
      icon: <Users size={20} />,
      path: "/community",
    },
    {
      name: "Explore Developers",
      icon: <Search size={20} />,
      path: "/developers",
    },
    
  ];

  return (
    <aside
      className="
      h-screen
      w-72
      bg-[#111827]
      border-r
      border-cyan-500/10
      flex
      flex-col
      justify-between
      sticky
      top-0
      "
    >
      {/* Logo */}
      <div>
        <div className="p-8 border-b border-white/5">
          <h1
            className="
            text-3xl
            font-bold
            bg-gradient-to-r
            from-purple-500
            to-cyan-500
            bg-clip-text
            text-transparent
            "
          >
            CodeConnect
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Connect • Build • Collaborate
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex flex-col gap-2 mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-cyan-500/20 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }
                `
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 border-t border-white/5">
        <button
  onClick={handleLogout}
   className="
  w-full
  flex
  items-center
  gap-3
  px-4
  py-3
  mt-6
  rounded-xl
  text-red-400
  bg-red-500/10
  border
  border-red-500/20
  hover:bg-red-500/20
  hover:border-red-500/40
  transition-all
  duration-300
  "
>
  Logout
</button>
      </div>
    </aside>
  );
}

export default Sidebar;