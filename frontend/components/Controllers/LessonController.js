import axios from "axios";
import Cookies from "js-cookie";



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
// {
// }

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

// @def get the all submissions of that student of that assignment
// @output {success and submission[{submission}] property}
export const getAllSubmissions = async (assignmentID) => {
  const response = await axios.get(
    `http://localhost:7000/api/v1/submissions/${assignmentID}`,
    {
      headers: {
        Authorization: `${Cookies.get("token")}`,
      },
    }
  );

  return response.data;
};
//console.log("Ass-Subs", getAllSubmissions("64526b89dc8e8a1328433b42"));


// console.log(
//   "P-Lesson",
//   postContentByLesson("6452547c1f2d691aa5a8ad7d", {
//     content: "www.drive.com/introduction-to-eng-p3.pdf",
//   })
// );




// Post requests for Quiz
// output {message and success property}
export const postQuizByLesson = async (lessonID, data) => {
    let payLoad = data;

    const response = await axios.post(
        `http://localhost:7000/api/v1/quiz/${lessonID}`,
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
//   "P-Quiz",
//   postQuizByLesson("6452547c1f2d691aa5a8ad7d", {
//     name: "Quiz: Intro to Eng-6 P2",
//     description: "Suprised Quiz",
//     startTime: { hours: 3, minutes: 0, seconds: "0" },
//     duration: { hours: 0, minutes: 15, seconds: "0" },
//   })
// );

// Post requests for Quiz
// output {message and success property}
export const postQuestionsByQuiz = async (quizID, data) => {
    let payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/quiz/questions/${quizID}`,
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
//   "P-Quiz-Questions",
//   postQuestionsByQuiz("6457d06f6408640deeaceee4", {
//     questions: [
//       {
//         question: "What is English?",
//         questionOptions: ["o1", "o1", "o1", "o1"],
//         questionAnswer: "o1",
//         isCorrect: true,
//       },
//       {
//         question: "What is English?",
//         questionOptions: ["o1", "o1", "o1", "o1"],
//         questionAnswer: "o1",
//         isCorrect: true,
//       },
//       {
//         question: "What is English?",
//         questionOptions: ["o1", "o1", "o1", "o1"],
//         questionAnswer: "o1",
//         isCorrect: true,
//       },
//     ],
//   })
// );

// 	Put request for content,
// output {content property}
export const updateContent = async (lessonID, data) => {
    let payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/lesson/update/content/${lessonID}`,
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
//   "U-Content",
//   updateContent("6452547c1f2d691aa5a8ad7d", {
//     content: "www.drive.com/introduction-to-ps-v1.pdf",
//   })
// );

// 	Put request for assignment
// Output {message,success, and assignment property}
export const updateAssignment = async (assignmentID, data) => {
    let payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/assignment/update/${assignmentID}`,
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
//   "U-Assignment",
//   updateAssignment("64526b89dc8e8a1328433b42", {
//     name: "Assignment01-P2",
//     description: "Assignment01-P2 of Lesson01",
//     fileName: "Assignment01-P2.pdf",
//     fileLink:
//       "https://drive.google.com/file/d/1Gscx-Il0w04cOzS9d5r6b42tpydrZi28/view?usp=share_link",
//     totalMarks: 10,
//     deadLine: "2023-04-04",
//   })
// );

// 	Put request for event
// output {message, success, and event property}
export const updateEvent = async (eventID, data) => {
    let payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/event/${eventID}`,
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
//   "U-Event",
//   updateEvent("64525d92d3a7ac7e2abd88aa", {
//     name: "Live Class: Introduction to English",
//     description: "Introduction to Eng online class",
//     eventDate: "2023-04-26",
//     duration: { hours: 0, minutes: 45, seconds: "0" },
//     eventPassword: "12345",
//     eventLink: "www.youtube.com/live/introduction-to-eng/2398787w5r6yrwe5rqwf",
//   })
// );

// 	Put request for Quiz
export const updateQuiz = async (quizID, data) => {
    let payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/quiz/${quizID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};
// data object
// {
//      "name": "Quiz: Intro to Pakistan Studies",
//     "description": "Suprised Quiz",
//     "startTime": {"hours": 3 , "minutes": 0, "seconds": "0"},
//     "duration": {"hours": 0 , "minutes": 15, "seconds": "0"}
// }

// 	Put request for Quiz
export const updateQuizQuestions = async (quizID, data) => {
    let payLoad = data;

    const response = await axios.put(
        `http://localhost:7000/api/v1/quiz/questions/update/${quizID}`,
        payLoad,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};
//data object
// {
//     "questions": [
//         {
//             "question": "What is Pakistan Studies 01",
//             "questionOptions": ["o1","o1","o1","o1"],
//             "questionAnswer": "o1",
//             "isCorrect": true
//         },
//         {
//             "question": "What is Pakistan Studies 02",
//             "questionOptions": ["o1","o1","o1","o1"],
//             "questionAnswer": "o1",
//             "isCorrect": true
//         },
//         {
//             "question": "What is Pakistan Studies 03",
//             "questionOptions": ["o1","o1","o1","o1"],
//             "questionAnswer": "o1",
//             "isCorrect": true
//         }
//     ]
// }

// 	Delete request for content,
// output {updated lesson and success property}
export const deleteContentByLesson = async (lessonID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/lesson/delete/content/${lessonID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// console.log(
//   "Delete-Content",
//   deleteContentByLesson("6452547c1f2d691aa5a8ad7d")
// );

// 	Delete request for assignment
// output {updated lesson and success property}
export const deleteAssignmentByID = async (assignmentID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/assignment/delete/${assignmentID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

//console.log("Delete-Ass", deleteAssignmentByID("6457ce236408640deeaceeda"));

// 	Delete request for event
// output {updated lesson and success property}
export const deleteEventByID = async (eventID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/event/${eventID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// console.log("Delete-Event", deleteEventByID("6457cfaf6408640deeaceedf"));

// 	Delete request for Quiz
// output {updated lesson and success property}
export const deleteQuizByID = async (quizID) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/quiz/${quizID}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

// console.log("Delete-Quiz", deleteQuizByID("6457d06f6408640deeaceee4"));
