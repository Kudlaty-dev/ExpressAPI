const express = require("express");
const {
  getOne,
  getAll,
  createOne,
  updateOne,
  deleteOne,
} = require("../controllers/routes");
const router = express.Router();

router.route("/").get(getAll).post(createOne);

router.route("/:id").get(getOne).put(updateOne).delete(deleteOne);

/* Code below works. Kept for tracking purposes.



const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    msg: `Success with method GET, no id.`,
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Success with method GET, id = ${req.params.id}.`,
  });
});

router.post("/:id", (req, res) => {
  res.status(200).json({
    status: true,
    msg: `Success with method POST, id = ${req.params.id}.`,
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    status: true,
    msg: `Success with method POST, id = ${req.params.id}.`,
  });
});

module.exports = router;

*/
