const express = require("express");
const multer = require("multer");
const multerConfig = require("../utils/multer");
const path = require("path");

const router = express.Router();

//imports
const CreateUserController = require("../controllers/user/CreateUserController");
const AuthController = require("../controllers/user/AuthController");
const CreateLikeController = require("../controllers/like/CreateLikeController");
const ListLikeController = require("../controllers/like/ListLikeController");
const CreateMovieController = require("../controllers/movie/CreateMovieController");
const CreateRatingController = require("../controllers/rating/CreateRatingController");
const GetAllMoviesController = require("../controllers/movie/GetAllMoviesController");
const GetMovieByIdController = require("../controllers/movie/GetMovieByIdController");
const GetUserByIdController = require("../controllers/user/GetUserByIdController");
const DeleteRatingController = require("../controllers/rating/DeleteRatingController");
const CreateStreamerController = require("../controllers/streamer/CreateStreamerController");

//controller
const createUserController = new CreateUserController();
const authController = new AuthController();
const createLikeController = new CreateLikeController();
const listLikeController = new ListLikeController();
const createMovieController = new CreateMovieController();
const createRatingController = new CreateRatingController();
const getAllMoviesController = new GetAllMoviesController();
const getMovieByIdController = new GetMovieByIdController();
const getUserByIdController = new GetUserByIdController();
const deleteRatingController = new DeleteRatingController();
const createStreamerController = new CreateStreamerController();


router.get("/", (req, res) => {
  res.send({ ok: true });
});

router.post("/signup", createUserController.handle);
router.post("/auth", authController.handle);

router.post("/user/:userId/likes", createLikeController.handle);
router.get("/user/:userId/rating", getUserByIdController.handle);
router.delete("/rating/:ratingId",deleteRatingController.handle);

router.post(
  "/movie/:userId",
  multer(multerConfig).single("file"),
  createMovieController.handle
);
router.get("/movies", getAllMoviesController.handle);
router.get("/movie/:id", getMovieByIdController.handle);

router.post("/movie/:movieName/ratings", createRatingController.handle);

router.post("/streamer",createStreamerController.handle);

module.exports = router;
