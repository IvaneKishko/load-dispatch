const express = require("express");
const { check } = require("express-validator");

const loadsControllers = require("../controllers/loads-controller");

const router = express.Router();

router.get("/", loadsControllers.getLoads);

router.get("/:lid", loadsControllers.getLoadById);

router.get("/user/:uid", loadsControllers.getLoadsByUserId);

router.post(
  "/",
  [
    check("model").not().isEmpty(),
    check("pickupDate").not().isEmpty(),
    check("pickupLocation").not().isEmpty(),
    check("dropOffLocation").not().isEmpty(),
    check("price").not().isEmpty(),
    check("payment").not().isEmpty(),
    check("address").not().isEmpty(),
  ],
  loadsControllers.createLoad
);

router.patch(
  "/:lid",
  [check("model").not().isEmpty(), check("price").isLength({ min: 5 })],
  loadsControllers.updateLoad
);

router.delete("/:lid", loadsControllers.deleteLoad);

module.exports = router;
