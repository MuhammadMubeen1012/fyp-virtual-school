import axios from "axios";
import Cookies from "js-cookie";

export const getStudent = async () => {
  const response = await axios.get(`http://localhost:7000/api/v1/student`, {
    headers: {
      Authorization: `${Cookies.get("token")}`,
    },
  });

  return response.data;
};

// export const getClassroom = async () => {
//   const student = await getStudent()
//   const classroom = student.classroom

//   const response = await axios.get(`http://localhost:7000/api/v1/classroom/${classroom}`, {
//     headers: {
//       Authorization: `${Cookies.get("token")}`,
//     },
//   });

//   return response.data;
// };

export const getCourses = async () => {
  const student = await getStudent();
  // console.log(student.student.classroom);
  const classroom = student.student.classroom;
  // console.log("Classroom", classroom);

  const response = await axios.get(
    `http://localhost:7000/api/v1/courses/${classroom}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};

export const getLessons = async (id) => {
  return await axios.get(`http://localhost:7000/api/v1/lesson/${id}`, {
    headers: {
      Authorization: `${Cookies.get("token")}`,
    },
  });
};

export const getLesson = async (lesson_id) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/course/lesson/${lesson_id}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );
  return response.data.lesson;
};
// ---------- get -------------
// 	Get the Content of that lesson
// output [{name and link of contents of specified lesson}]
export const getContentsByLesson = async (lessonID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/lesson/content/${lessonID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data.content;
};
// console.log("Contents", getContentsByLesson("6452547c1f2d691aa5a8ad7d"));

// 	Get the Assignments of that lesson
// output [object of assignments of specified lesson]
export const getAssignmentsByLesson = async (lessonID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/assignment/${lessonID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data.assignments;
};
// console.log("Assignments", getAssignmentsByLesson("6452547c1f2d691aa5a8ad7d"));

// 	Get Quizes of that lesson
// output [object of quizes of specified lesson]
export const getQuizesByLesson = async (lessonID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/quiz/${lessonID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data.quiz;
};
// console.log("Quiz", getQuizesByLesson("6452547c1f2d691aa5a8ad7d"));

// 	Get event of that lesson
// output [object of quizes of specified lesson]
export const getEventsByLesson = async (lessonID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/event/${lessonID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data.event;
};
// console.log("Event", getEventsByLesson("6452547c1f2d691aa5a8ad7d"));

// @def get the submission of that student
// @output {submission and success property}
export const getAssignmentSubmissionByStudent = async (assignmentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/submission/${assignmentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};
// console.log(
//   "Ass-Sub",
//   getAssignmentSubmissionByStudent("64526b89dc8e8a1328433b42")
// );

// ---------- submit -------------
// @def Submission of Assignment
// @output {message,submission,and success property}
export const submitAssignment = async (assignmentID, data) => {
  let payLoad = data;

  const response = await axios.post(
    `http://localhost:7000/api/v1/submission/${assignmentID}`,
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
//   "Ass-Sub",
//   submitAssignment("6457ce236408640deeaceeda", {
//     fileName: "023-19-0020_Ass2_Submission",
//     fileLink: "www.drive.com/023-19-0020_Ass2_Submission",
//   })
// );

// @def Submission of Quiz
// @output {success, message, and submission property}
export const submitQuiz = async (quizID, data) => {
  let payLoad = data;

  const response = await axios.post(
    `http://localhost:7000/api/v1/submit/quiz/${quizID}`,
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
//   "Sub-Quiz",
//   submitQuiz("6457d06f6408640deeaceee4", {
//     quizAnswers: ["o1", "o1", "o1"],
//   })
// );
