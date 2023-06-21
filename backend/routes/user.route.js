const express = require("express");
const router = express.Router();
const validate = require("../utils/validation");
// const RequestValidator = require("../middlewares/requestvalidator.middleware");

const {
  signup,
  getSingleUser,
  editUser,
  deleteUser,
  getAllUsers
} = require("../controllers/user.controller");

router.post("", signup);

router.get("/:id", getSingleUser);
router.get("/", getAllUsers);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

module.exports = router;
