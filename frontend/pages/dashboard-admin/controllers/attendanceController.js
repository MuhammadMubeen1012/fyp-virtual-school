import axios from "axios";
import Cookies from "js-cookie";

export const getClassroomsByAcademicYear = async () => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/academicYear/classrooms/6433b54f4f2a795f64ae7ce7`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data.classrooms;
};

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
