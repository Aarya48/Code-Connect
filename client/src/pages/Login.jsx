  import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");
       navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Account not found. Please register first."
      );

     
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-16">

        <div
          className="
          w-full
          max-w-md
          bg-[#111827]
          border
          border-cyan-500/20
          rounded-3xl
          p-8
          shadow-xl
          "
        >

          <h1 className="text-4xl font-bold text-center mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Login to continue your journey on CodeConnect.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="
              w-full
              p-3
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              focus:border-cyan-500
              outline-none
              "
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="
              w-full
              p-3
              rounded-xl
              bg-[#0B1020]
              border
              border-gray-700
              focus:border-cyan-500
              outline-none
              "
            />

            <button
              type="submit"
              className="
              mt-2
              py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              font-semibold
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="
              text-cyan-400
              cursor-pointer
              hover:text-cyan-300
              "
            >
              Register
            </span>
          </p>

        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Login;