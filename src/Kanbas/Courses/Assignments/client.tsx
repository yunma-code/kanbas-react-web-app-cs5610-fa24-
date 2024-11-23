import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSE_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const getAssignmentsByCourseId = async (courseId: string) => {
  const { data } = await axios.get(`${COURSE_API}/${courseId}/assignments`);
  return data;
};

export const getAssignmentById = async (assignmentId: string) => {
  const { data } = await axios.get(`${ASSIGNMENT_API}/${assignmentId}`);
  return data;
};

export const createAssignment = async (assignment: any) => {
  const { data } = await axios.post(ASSIGNMENT_API, assignment);
  return data;
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENT_API}/${assignmentId}`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
  return data;
};