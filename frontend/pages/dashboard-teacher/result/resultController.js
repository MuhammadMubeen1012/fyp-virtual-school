import axios from "axios";
import Cookies from "js-cookie";

// get courses of teacher
export const getCourses = async () => {
  const response = await axios.get(`http://localhost:7000/api/v1/courses`, {
    headers: {
      Authorization: `${Cookies.get("token")}`,
    },
  });
  return response.data;
};

// console.log("Courses", getCourses());

//compile result of all student that course
// @output sucess and message property in response.data
export const compileResults = async (courseID) => {
  const response = await axios.post(
    `http://localhost:7000/api/v1/compile/result/${courseID}`,
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
export const publishResults = async (courseID) => {
  console.log(`${Cookies.get("token")}`);

  const response = await axios.put(
    `http://localhost:7000/api/v1/publish/result/${courseID}`,
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

// get student result
// @output {message, success, courseResult}
export const getResult = async (courseID, studentID) => {
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

// console.log(
//   "Result for student",
//   getResult("645122c1e1bcdf8c2a93b954", "645244addc59de951d55e4ba")
// );

// get course result
// @output [courseResults], message and success property
export const getResults = async (courseID) => {
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
