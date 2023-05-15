import axios from "axios";
import Cookies from "js-cookie";
// ----------- exam -----------------
// get exam by course
export const getExam = async (courseID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/exam/course/${courseID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// get subjective
export const getSubjectiveExam = async (examID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/exam/subjectiveExam/${examID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// get objective exam
export const getObjectiveExam = async (examID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/exam/objectiveExam/${examID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// ---------------- exam submission ----------------------
// submit exam
export const submitExam = async (examID, data) => {
  const payLoad = data;
  const response = await axios.post(
    `http://localhost:7000/api/v1/submit/exam/${examID}`,
    payLoad,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// get submission by student
export const getSubmission = async (studentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/submission/exam/${studentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// ------------ exam result ------------------------
// get result by student
export const getResult = async (studentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/result/exam/student/${studentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};
