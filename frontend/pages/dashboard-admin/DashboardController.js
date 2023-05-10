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

// list of academic years
// @output [object[academicYears]] and success property
export const getAcademicYears = async () => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/academicYear`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("AcademicYears", getAcademicYears());

// live/unlive academic year or update
// @output {academicYear , message, and success}
export const updateAcademicYear = async (id, data) => {
  const payLoad = data;

  const response = await axios.put(
    `http://localhost:7000/api/v1/academicYear/${id}`,
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
//   "Update",
//   updateAcademicYear("6433b54f4f2a795f64ae7ce7", { isOpen: true })
// );

// students based on the classroom
// @output {students arraay and success property}
export const getStudents = async (classID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/students/${classID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Students: ", getStudents("6433b73ed47c769ed165ca0d"));

// teachers based on the classroom
// @output {teachers arraay and success property}
export const getTeachers = async (classID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/teachers/${classID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Teachers: ", getTeachers("6433b73ed47c769ed165ca0d"));

// courses based on the classroom
// @output {courses arraay and success property}
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

// console.log("Courses: ", getCourses("6433b73ed47c769ed165ca0d"));

// details of student on the click
// @output {student object and success property}
export const getStudent = async (studentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/student/${studentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Student: ", getStudent("642f9a314a13797e1640ab14"));

// details of teacher on the click
// @output {teacher object and success property}
export const getTeacher = async (teacherID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/teacher/${teacherID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Teacher: ", getTeacher("6452497b161ad4d29335fdb9"));

// details of course on the click
// @output {course object and success property}
export const getCourse = async (courseID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/course/${courseID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data;
};

// console.log("Course: ", getCourse("64512345e1bcdf8c2a93b966"));

// block user (student or teacher)
// @output {message, user and success property}
export const blockUnblockUser = async (userID, data) => {
  const payLoad = data;

  const response = await axios.put(
    `http://localhost:7000/api/v1/block/user/${userID}`,
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
//   "Updated User: ",
//   blockUnblockUser("64061f80c1d1638f3086c6a7", { isBlocked: false })
// );
