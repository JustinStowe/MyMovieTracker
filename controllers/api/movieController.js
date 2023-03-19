const Movie = require("../../models/Movie");
const User = require("../../models/user");
const dataController = {
  //index
  async index(req, res, next) {
    try {
      const user = await User.findById(req.user._id).populate("movies");
      const foundMovies = user.movies;
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
      console.log("Error in destroy route", error);
      res.status(500).json({ error });
    }
    next();
  },
  //update
  async update(req, res, next) {
    const { id } = req.params;
    const updates = { ...req.body };

    try {
      const user = await User.findById(req.user._id).populate("movies");

      // Find the target movie in the user's movies array
      const targetMovie = user.movies.find((movie) => movie._id.equals(id));

      if (targetMovie) {
        // If the movie is found, update its data and save the user
        Object.assign(targetMovie, updates);
        await user.save();
      } else {
        // If the movie is not found in the user's movies array, check the watchedMovies array
        const targetWatchedMovie = user.watchedMovies.find((movie) =>
          movie._id.equals(id)
        );

        if (targetWatchedMovie) {
          // If the movie is found in the user's watchedMovies array, update its data and save the user
          Object.assign(targetWatchedMovie, updates);
          await user.save();
        } else {
          // If the movie is not found in either array, return a 404 error
          res.status(404).json({ error: "Movie not found" });
        }
      }

      return res.json({ message: "Movie updated successfully" });
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
          return res.json({
            message: "You already have this movie in your list",
          });
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

      const user = await User.findById(req.user._id).populate("movies");
      user.movies.push(newMovie);
      await user.save();
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
      const user = await User.findById(req.user._id).populate("movies");

      const watchedMovie = user.movies.find((movie) => movie.id === id);

      if (!watchedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }

      user.watchedMovies.push(watchedMovie);
      await user.save();
      console.log("users watched movies", user.watchedMovies);

      const watchedMovies = user.watchedMovies;
      return res.json({ watchedMovies });
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
    res.json(res.locals.data.movie);
  },
  show(req, res, next) {
    console.log("Res full", res);
    res.json(res.locals.data.movie);
  },
};

module.exports = { dataController, apiController };
