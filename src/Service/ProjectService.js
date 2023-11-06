import axios from "../axios";
//Get ProjectSummary
const getProjectSummary = () => {
  return axios.get(`/projects/status`);
};
//Get Project by ProjectId
const getProjectByProjectId = (projId) => {
  return axios.get(`/project/${projId}`);
};

//Get Orders by ProjectId And Status
const getOrdersByProjectIdAndStatus = (projId, status) => {
  return axios.get(`/projects/${projId}/orders?status=${status}`);
};

const ProjectService = {
  getProjectSummary,
  getProjectByProjectId,
  getOrdersByProjectIdAndStatus,
};

export default ProjectService;
