const express = require("express");

const router = express.Router();

const DUMMY_LOADS = [
  {
    id: "l1",
    model: "mazda",
    creator: "u1",
  },
  {
    id: "l2",
    model: "mazda2",
    creator: "u2",
  },
];

router.get("/users/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const load = DUMMY_LOADS.find((load) => load.creator === userId);

  if (!load) {
    const error = new Error("Could not find place or provided id.");
    error.code = 404;
    throw error;
  }

  res.json({ load });
});

router.get("/:lid", (req, res, next) => {
  const loadId = req.params.lid;
  const load = DUMMY_LOADS.find((load) => load.id === loadId);

  if (!load) {
    const error = new Error("Could not find place or provided id.");
    error.code = 404;
    return next(error);
  }

  res.json({ load });
});

module.exports = router;
