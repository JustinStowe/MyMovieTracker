const Movie = require("../../models/Movie");
const User = require("../../models/user");
const dataController = {
  //index
  async index(req, res, next) {
    try {
      const user = await User.findById(req.user._id).populate("movies");
      const foundMovies = user.movies;
      console.log("all the movies", foundMovies);
      return res.json(foundMovies);
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //destroy
  async destroy(req, res, next) {
    const { id } = req.params;
    try {
      const deleteMovie = await Movie.findByIdAndDelete(id);
      console.log("the deleted movie", deleteMovie);
      return res.json({ message: "movie deleted successfully" });
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //update
  async update(req, res, next) {
    const { id } = req.params;
    const { completed } = req.body;

    try {
      const user = await User.findById(req.user._id);
      console.log("update movie user", user);

      user.movies = user.movies.map((movie) => {
        if (movie.id === id) {
          movie.completed = completed;
        }
        return movie;
      });

      user.markModified("movies");
      await user.save();

      const updatedMovie = await Movie.findByIdAndUpdate(
        id,
        { completed },
        { new: true }
      );
      console.log("The updated Movie", updatedMovie);

      return res.json(updatedMovie);
    } catch (error) {
      console.log("update movie error", error);
      res.status(500).json({ error });
    }
    next();
  },
  //create
  async create(req, res, next) {
    try {
      const newMovie = await Movie.create({
        ...req.body,
      });
      console.log("the new movie", newMovie);

      const user = await User.findById(req.user._id);
      user.movies.push(newMovie);
      await user.save();

      console.log("updated user", user);
      return res.json(newMovie);
    } catch (error) {
      console.log("create movie error", error);

      res.status(500).json({ error });
    }
    next();
  },
  //edit
  //show
  async show(req, res, next) {
    const { id } = req.params;
    try {
      const targetMovie = await Movie.FindByID(id);
      console.log(targetMovie);
      return targetMovie;
    } catch (error) {
      console.log("show movie error", error);
      res.status(500).json({ error });
    }
    next();
  },
};

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.fruits);
  },
  show(req, res, next) {
    console.log("Res full", res);
    res.json(res.locals.data.fruit);
  },
};

module.exports = { dataController, apiController };
