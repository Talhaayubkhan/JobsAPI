const express = require("express");
const router = express.Router();

const {
  getAllJobs,
  createJob,
  singleJob,
  deleteJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(singleJob).patch(updateJob).delete(deleteJob);

module.exports = router;
