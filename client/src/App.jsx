import Landing from "./pages/Landing";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
 import AddProject from "./pages/AddProject";
 import MyProjects from "./pages/MyProjects";
 import EditProject from "./pages/EditProject";
import Community from "./pages/Community";
import ExploreDevelopers from "./pages/ExploreDevelopers";

function App() {
  return <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route
  path="/my-projects"
  element={<MyProjects />}
  
/>
<Route
  path="/community"
  element={<Community />}
/>


<Route
  path="/developers"
  element={<ExploreDevelopers />}
/>
<Route
  path="/projects/edit/:id"
  element={<EditProject />}
/>

<Route
  path="/projects/create"
  element={<AddProject />}
/>
</Routes>
}

export default App;
