const Project = require("../models/project");

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
    } = req.body;

    const project = await Project.create({
      title,
      description,
      techStack,
      githubLink,
      liveLink,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProjects = async (req, res) => {
  try {

    const projects = await Project.find()
  .populate("owner", "name email");

    res.status(200).json(projects);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getMyProjects = async (req, res) => {
  try {

    const projects = await Project.find({
      owner: req.user.id,
    }).populate("owner", "name email");

    res.status(200).json(projects);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const deleteProject = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized to delete this project",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      message: "Project deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProjectById = async (req, res) => {
  try {

    const project = await Project.findById(req.params.id)
      .populate("owner", "name email githubUsername");

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProject = async (req, res) => {
  try {

    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
    } = req.body;

    const project = await Project.findById(
      req.params.id
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    project.title = title || project.title;
    project.description =
      description || project.description;
    project.techStack =
      techStack || project.techStack;
    project.githubLink =
      githubLink || project.githubLink;
    project.liveLink =
      liveLink || project.liveLink;

    await project.save();

    res.status(200).json({
      message: "Project updated successfully",
      project,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createProject,getProjects,getMyProjects,deleteProject,getProjectById,updateProject,
};