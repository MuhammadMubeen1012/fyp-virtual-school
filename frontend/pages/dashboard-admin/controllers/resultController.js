import axios from "axios";
import Cookies from "js-cookie";

// get courses by classroom
export const getCourses = async (classID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/courses/${classID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Courses", getCourses());

// get course results
// @output [courseResults], message and success property
export const getCourseResults = async (courseID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/results/${courseID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Courses", getResults("645122c1e1bcdf8c2a93b954"));

// compile result of all student of that class
// @output sucess and message property in response.data
export const compileClassResults = async (classroomID) => {
  const response = await axios.post(
    `http://localhost:7000/api/v1/result/classroom/${classroomID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response;
};

// console.log("Compiling Results", compileResults("645122c1e1bcdf8c2a93b954"));

//publish result
export const publishClassResults = async (classroomID) => {
  const response = await axios.put(
    `http://localhost:7000/api/v1/result/classroom/publish/${classroomID}`,
    {},
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response;
};
// console.log("Publishing result", publishResults("645122c1e1bcdf8c2a93b954"));

export const getClassResults = async (classroomID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/results/classroom/${classroomID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// get student result
// @output {message, success, courseResult}
export const getResult = async (classroomID, studentID) => {
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

// console.log(
//   "Result for student",
//   getResult("645122c1e1bcdf8c2a93b954", "645244addc59de951d55e4ba")
// );
