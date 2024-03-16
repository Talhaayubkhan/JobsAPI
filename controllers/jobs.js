const getAllJobs = (req, res) => {
  res.send("All Jobs");
};
const singleJob = (req, res) => {
  res.send("All Jobs");
};
const createJob = (req, res) => {
  res.json(req.user);
};
const deleteJob = (req, res) => {
  res.send("All Jobs");
};
const updateJob = (req, res) => {
  res.send("All Jobs");
};

module.exports = {
  getAllJobs,
  singleJob,
  createJob,
  deleteJob,
  updateJob,
};
