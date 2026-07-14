const User = require("../models/user");

const getProfile = async (req, res) => {
  try {
const user = await User.findById(
  req.user.id
).select("-password");


    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { bio, skills, githubUsername,profileImage } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.bio = bio || user.bio;
    user.skills = skills || user.skills;
    user.githubUsername = githubUsername || user.githubUsername;
    user.profileImage =
  profileImage || user.profileImage;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password");

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,updateProfile,getAllUsers,
};