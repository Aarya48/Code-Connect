import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate=useNavigate();
const handleLogin = async() => {
   try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );
    
  localStorage.setItem("token",response.data.token);
  navigate("/")
   

  } catch (error) {
    console.log(error.response?.data);
  }
};
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      <div className="hidden md:flex bg-[#0B1020] items-center justify-center">
        <h1 className="text-white text-5xl font-bold">
          CodeConnect
        </h1>
      </div>

      <div className="flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold mb-2">  Welcome Back</h2>
          <p className="text-gray-500 mb-6"> Login to your account</p>

          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-3 rounded-lg mb-4" />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-3 rounded-lg mb-4" />
         
          <button onClick={handleLogin} className="w-full bg-purple-600 text-white p-3 rounded-lg">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;