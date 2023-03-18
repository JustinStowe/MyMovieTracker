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
  //watched index
  async watchedIndex(req, res, next) {
    try {
      const user = await User.findById(req.user._id).populate("watchedMovies");
      const foundWatchedMovies = user.watchedMovies;
      console.log("all watched movies", foundWatchedMovies);
      return res.json(foundWatchedMovies);
    } catch (error) {
      console.log("watched movies index error", error);
      res.status(500).json({ error });
    }
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
    try {
      const user = await User.findById(req.user._id);
      console.log("user in update route", user);
      const targetMovie = user.movies.findIndex(
        (movie) => movie.toString() === id
      );
      if (targetMovie !== -1) {
        user.movies.splice(targetMovie, 1);
        await user.save();
      }
      const targetWatchedMovie = user.watchedMovies.findIndex(
        (movie) => movie.toString() === id
      );

      if (targetWatchedMovie !== -1) {
        user.watchedMovies.splice(targetWatchedMovie, 1);
        await user.save();
      }
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //create
  async create(req, res, next) {
    const { imdbID } = req.body;
    try {
      //searching for existing movie in database
      const existingMovie = await Movie.find({
        imdbID: { $exists: true, $eq: imdbID },
      });
      //if it exists, push it into user movie array
      if (existingMovie) {
        const user = await User.findById(req.user._id).populate("movies");

        const userHasMovie = await User.find({
          imdbID: { $exists: true, $eq: imdbID },
        });

        if (userHasMovie) {
          alert("You already have this movie in your list");
        } else {
          user.movies.push(existingMovie);
          await user.save();
          console.log("user movie collection", user.movies);
          return res.json(existingMovie);
        }
      }
      //if the movie doesn't already exist, create it and push it into user's movie array
      const newMovie = await Movie.create({
        ...req.body,
      });
      console.log("the new movie", newMovie);

      const user = await User.findById(req.user._id).populate("movies");
      user.movies.push(newMovie);
      await user.save();

      console.log("user movie collection", user);
      return res.json(newMovie);
    } catch (error) {
      console.log("create movie error", error);
      res.status(500).json({ error });
    }
    next();
  },
  //edit
  async edit(req, res, next) {
    const { id } = req.params;

    try {
      const user = await User.findById(req.user._id);
      console.log("user in edit route", user);

      for (let i = 0; i < user.movies.length; i++) {
        const movie = user.movies[i];

        if (movie.id === id) {
          user.watchedMovies.push(movie);
          await user.save();
          console.log("users watched movies", user.watchedMovies);
        }
      }

      const watchedMovies = user.watchedMovies;
      return res.json({ watchedMovies, user });
    } catch (error) {
      console.log("edit movie error", error);
      res.status(500).json({ error });
    }
  },

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
