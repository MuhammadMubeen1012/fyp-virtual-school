import axios from "axios";
import Cookies from "js-cookie";

// get student course result
export const getCourseResult = async (courseID, studentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/result/${courseID}/${studentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// get student class result
export const getClassroomResult = async (classroomID, studentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/result/classroom/${classroomID}/${studentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};
