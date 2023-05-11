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

// get all attendance of any course
// @output [attendance]
// object contain {classroom, course, createdAt, endTime, startTime, teacher, _id, attendanceListProperty}
export const getCourseAttendance = async (courseID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/attendance/course/${courseID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log("Attendance: ", getCourseAttendance("64512345e1bcdf8c2a93b966"));

// get attendance detail of any attendance
// @ output {attendance and success property}
export const getAttendance = async (id) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/attendance/${id}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log("Attendance:", getAttendance("645cb1f767d5fdfbdc9eb1e3"));

// create new attendance
// @output attendance object
export const createAttendance = async (courseID, data) => {
  const payLoad = data;

  const response = await axios.post(
    `http://localhost:7000/api/v1/attendance/${courseID}`,
    payLoad,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log(
//   "Creating",
//   createAttendance("64512345e1bcdf8c2a93b966", {
//     startTime: "7:00",
//     endTime: "8:00",
//   })
// );

// save attendance
// @output {attendance and success}
export const saveAttendance = async (attendanceID, data) => {
  const payLoad = data;

  const response = await axios.put(
    `http://localhost:7000/api/v1/attendance/${attendanceID}`,
    payLoad,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

// console.log(
//   "Saving Attendance",
//   saveAttendance("645cd26ca4194bfe074becb3", { markedAttendance: [1] })
// );
