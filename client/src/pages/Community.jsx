import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

function Community() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/posts"
      );

      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePost = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/posts",
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setContent("");

      fetchPosts();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0B1020] text-white">

      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-6">
          Community
        </h1>

        {/* Create Post */}

        <div
          className="
          bg-[#111827]
          rounded-3xl
          p-6
          border
          border-cyan-500/10
          mb-8
          "
        >

          <textarea
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="What's on your mind?"
            rows="4"
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

          <button
            onClick={handlePost}
            className="
            mt-4
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-cyan-500
            "
          >
            Post
          </button>

        </div>

        {/* Posts Feed */}

        <div className="flex flex-col gap-5">

          {posts.length === 0 ? (

            <div
              className="
              bg-[#111827]
              rounded-3xl
              p-8
              text-center
              "
            >
              No Posts Yet 🚀
            </div>

          ) : (

            posts.map((post) => (

              <div
                key={post._id}
                className="
                bg-[#111827]
                rounded-3xl
                p-6
                border
                border-cyan-500/10
                "
              >

                <div className="flex items-center gap-3 mb-4">

                  {post.author?.profileImage ? (

                    <img
                      src={post.author.profileImage}
                      alt="profile"
                      className="
                      w-12
                      h-12
                      rounded-full
                      object-cover
                      "
                    />

                  ) : (

                    <div
                      className="
                      w-12
                      h-12
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-cyan-500
                      flex
                      items-center
                      justify-center
                      font-bold
                      "
                    >
                      {post.author?.name?.charAt(0)}
                    </div>

                  )}

                  <div>
                    <h3 className="font-semibold">
                      {post.author?.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {new Date(
                        post.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>

                </div>

                <p className="text-gray-200">
                  {post.content}
                </p>

              </div>

            ))

          )}

        </div>

      </main>

    </div>
  );
}

export default Community;