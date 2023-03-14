const Movie = require("../../models/Movie");

const dataController = {
  //index
  async index(req, res, next) {
    try {
      const foundMovies = await Movie.find({}).populate("comments").exec();
      console.log("all the movies", foundMovies);
      return res.json(foundMovies);
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //destroy
  async destroy(req, res, next) {
    try {
      const deleteMovie = await Movie.findByIdAndDelete(id);
      console.log("the deleted movie", deleteMovie);
      return;
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //update
  async update(req, res, next) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(id);
      console.log("The updated Movie", updatedMovie);
      return updatedMovie;
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //create
  async create(req, res, next) {
    try {
      const newMovie = await Movie.create({ ...req.body });
      console.log("the new movie", newMovie);
      return newMovie;
    } catch (error) {
      res.status(500).json({ error });
    }
    next();
  },
  //edit
  //show
  async show(req, res, next) {
    try {
      const targetMovie = await Movie.FindByID(id);
      console.log(targetMovie);
      return targetMovie;
    } catch (error) {}
    next();
  },
};

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.fruits);
  },
  show(req, res, next) {
    res.json(res.locals.data.fruit);
  },
};

module.exports = { dataController, apiController };
