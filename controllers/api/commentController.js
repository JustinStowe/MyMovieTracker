const Comment = require("../../models/comment");

const dataController = {
  //index
  async index(req, res, next) {
    try {
      const foundComments = await Comment.find(req.movie);
      console.log("all the comments", foundComments);
      return res.json(foundComments);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
    next();
  },
  //destroy
  async destroy(req, res, next) {
    const { id } = req.params;
    try {
      const deleteComment = await Comment.findByIdAndDelete(id);
      console.log("the deleted comment", deleteComment);
      return;
    } catch (error) {
      console.log("deleted comment error", error);
      res.status(500).json({ error });
    }
    next();
  },
  //update
  async update(req, res, next) {
    const { id } = req.params;
    try {
      const updatedComment = await Comment.findByIdAndUpdate(id);
      console.log("updated comment", updatedComment);
      return updatedComment;
    } catch (error) {
      console.log("updated comment error", error);
      res.status(500).json({ error });
    }
    next();
  },
  //create
  async create(req, res, next) {
    try {
      const newComment = await Comment.create(
        { ...req.body },
        req.user._id,
        req.movie
      );
      console.log("created comment", newComment);
    } catch (error) {
      console.log("created comment error", error);
      res.status(500).json({ error });
    }
    next();
  },
  //edit
  //show
  async show(req, res, next) {
    const { id } = req.params;
    try {
      const targetComment = await Comment.findById(id);
      console.log("show route comment", targetComment);
      return targetComment;
    } catch (error) {
      console.log("show route comment error", error);
      res.status(500).json({ error });
    }
  },
};

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.comments);
  },
  show(req, res, next) {
    res.json(res.locals.data.comment);
  },
};

module.exports = { dataController, apiController };
