const express = require("express");
const { check } = require("express-validator");

const loadsControllers = require("../controllers/loads-controller");

const router = express.Router();

router.get("/:lid", loadsControllers.getLoadById);

router.get("/user/:uid", loadsControllers.getLoadsByUserId);

router.post(
  "/",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 }), check('address').not().isEmpty()],
  loadsControllers.createLoad
);

router.patch("/:lid", [check("title").not().isEmpty(), check("description").isLength({ min: 5 })], loadsControllers.updateLoad);

router.delete("/:lid", loadsControllers.deleteLoad);

module.exports = router;
