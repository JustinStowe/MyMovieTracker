const Comment = require("../../models/comment");
const Movie = require("../../models/Movie");
const User = require("../../models/user");
const dataController = {
  //index
  async index(req, res, next) {
    console.log("index req", res);
    try {
      const movie = await Movie.find(req.movieid).populate("comments");
      const foundComments = movie.comments;
      console.log("the found comments", foundComments);
      // res.locals.data.comments = foundComments;
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
      const updatedComment = await Comment.findByIdAndUpdate(id, req.body, {
        new: true,
      });
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
    const { id } = req.params;
    // console.log("comments req", req.body);
    try {
      const newComment = await Comment.create({ ...req.body });
      console.log("the created comment", newComment);
      const user = await User.findById(req.user._id);
      console.log("the found user", user);
      newComment.username = user;
      await newComment.save();
      const targetMovie = await Movie.findOneAndUpdate(
        { _id: id },
        { $push: { comments: newComment._id } }
      );
      console.log("the target movie", targetMovie);
      // targetMovie.comments.push(newComment);
      // await targetMovie.save();
      // console.log("the movie comments", targetMovie.comments);
      res.locals.data.movie = targetMovie;
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
      res.locals.data.comment = targetComment;
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
