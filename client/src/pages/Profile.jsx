import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
   const [profile, setProfile] = useState({
  name: "",
  email: "",
  githubUsername: "",
  bio: "",
  skills: "",
  profileImage:""
});
    const fetchProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      "http://localhost:5000/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setProfile({
  name: response.data.name,
  email: response.data.email,
  githubUsername: response.data.githubUsername || "",
  bio: response.data.bio || "",
  skills: response.data.skills.join(", "),
});


  } catch (error) {
    console.log(error);
  }
};
const handleSave = async () => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      "http://localhost:5000/api/users/profile",
      {
        githubUsername: profile.githubUsername,
        bio: profile.bio,
        skills: profile.skills
          .split(",")
          .map((skill) => skill.trim()),
          profileImage: profile.profileImage,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Profile Updated Successfully");
  } catch (error) {
    console.log(error);
  }
};
const handleChange = (e) => {
  setProfile({
    ...profile,
    [e.target.name]: e.target.value,
  });
};
const handleImageUpload = async (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const data = new FormData();

  data.append("file", file);

  data.append(
    "upload_preset",
    "codeconnect"
  );

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dijkukau8/image/upload",
      data
    );

    setProfile({
      ...profile,
      profileImage:response.data.secure_url,

        
    });

    alert("Image Uploaded Successfully");

  } catch (error) {
    console.log(error);
    alert("Image Upload Failed");
  }
};
useEffect(() => {
  fetchProfile();
}, []);
  return (
    
 
  <div className="flex min-h-screen bg-[#0B1020] text-white">

    <Sidebar />

    <main className="flex-1 p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Card */}

        <div
          className="
          bg-[#111827]
          rounded-3xl
          border
          border-cyan-500/10
          p-6
          h-fit
          "
        >

          <div className="flex flex-col items-center">

            {
  profile.profileImage ? (

    <img
      src={profile.profileImage}
      alt="profile"
      className="
      w-28
      h-28
      rounded-full
      object-cover
      "
    />

  ) : (

    <div
      className="
      w-28
      h-28
      rounded-full
      bg-gradient-to-r
      from-purple-500
      to-cyan-500
      flex
      items-center
      justify-center
      text-4xl
      font-bold
      "
    >
      {profile.name?.charAt(0)}
    </div>

  )
}

            <h2 className="text-2xl font-bold mt-4">
              {profile.name}
            </h2>

            <p className="text-gray-400 mt-1 text-center">
              {profile.email}
            </p>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold mb-2">
              Profile Completion
            </h3>

            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

              <div
                className="
                w-[80%]
                h-full
                bg-gradient-to-r
                from-purple-500
                to-cyan-500
                "
              />

            </div>

            <p className="text-cyan-400 mt-2">
              80% Complete
            </p>

          </div>

          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Skills Preview
            </h3>

            <div className="flex flex-wrap gap-2">

              {profile.skills
                ?.split(",")
                .filter(Boolean)
                .map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-400
                    text-sm
                    "
                  >
                    {skill.trim()}
                  </span>
                ))}

            </div>

          </div>

        </div>

        {/* Right Card */}

        <div
          className="
          lg:col-span-2
          bg-[#111827]
          rounded-3xl
          border
          border-cyan-500/10
          p-8
          "
        >

          <h2 className="text-2xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="flex flex-col gap-5">

            <div>
              <label className="text-gray-400 block mb-2">
                Name
              </label>

              <input
                value={profile.name}
                readOnly
                className="
                w-full
                p-3
                rounded-xl
                bg-[#0B1020]
                "
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2">
                Email
              </label>

              <input
                value={profile.email}
                readOnly
                className="
                w-full
                p-3
                rounded-xl
                bg-[#0B1020]
                "
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2">
                GitHub Username
              </label>

              <input
                name="githubUsername"
                value={profile.githubUsername}
                onChange={handleChange}
                placeholder="github username"
                className="
                w-full
                p-3
                rounded-xl
                bg-[#0B1020]
                "
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2">
                Bio
              </label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="5"
                placeholder="Tell people about yourself..."
                className="
                w-full
                p-3
                rounded-xl
                bg-[#0B1020]
                resize-none
                "
              />
            </div>

            <div>
              <label className="text-gray-400 block mb-2">
                Skills
              </label>

              <input
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                placeholder="React, Node, MongoDB"
                className="
                w-full
                p-3
                rounded-xl
                bg-[#0B1020]
                "
              />
            </div>

<div className="mt-4">
  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="hidden"
    id="profileImage"
  />

  <label
    htmlFor="profileImage"
    className="
    cursor-pointer
    px-4
    py-2
    rounded-xl
    bg-cyan-500/10
    text-cyan-400
    hover:bg-cyan-500/20
    "
  >
    Upload Photo
  </label>
</div>
            <button
              onClick={handleSave}
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

          </div>

        </div>

      </div>

    </main>

  </div>
);
    
  
}

export default Profile;