import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const navigate = useNavigate();
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }
    );

    alert(response.data.message);
    alert("Account Created Successfully");
navigate("/login");

  } catch (error) {
    alert(
      error.response?.data?.message ||
      "Something went wrong"
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
            Create Account
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Join CodeConnect and connect with like-minded individuals-Your First Step Towards Success
          </p>

         <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-4"
>

            <input
              type="text"
              placeholder="Full Name"
              name="name"
value={formData.name}
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
  type="text"
  placeholder="GitHub Username"
  name="githubUsername"
  value={formData.githubUsername}
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

            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
value={formData.confirmPassword}
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
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <span className="text-cyan-400 cursor-pointer hover:text-cyan-300"   onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Register;