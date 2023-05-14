import axios from "axios";
import Cookies from "js-cookie";


// const getCourse = async (id) => {
//     const response = await axios.get(`http://localhost:7000/api/v1/course/${id}`, {
//         headers: {
//             Authorization: `${Cookies.get('token')}`
//         }
//     })
//     console.log(response.data.course)
//     return response.data.course
// }

const getLessons = async (id) => {
    return await (axios.get(`http://localhost:7000/api/v1/lesson/${id}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }

            })
    )
}
const getLesson = async (lesson_id) => {
    console.log(Cookies.get('token'))
    const response = await (axios.get(`http://localhost:7000/api/v1/course/lesson/${lesson_id}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }

            })
    )
    return response.data.lesson;
}
const updateLesson = async (lesson_id, obj) => {
    // console.log(Cookies.get('token'))
    return await axios.put(`http://localhost:7000/api/v1/lesson/${lesson_id}`,
            obj,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            });
}

const addNewContent = async (lessonID, data) => {
    const response = await axios.put(
        `http://localhost:7000/api/v1/lesson/create/content/${lessonID}`,
        data,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;

}
const addNewAssignment = async (lessonID, data) => {
    const response = await axios.post(
        `http://localhost:7000/api/v1/assignment/${lessonID}`,
        data,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
}

const addNewEvent = async (lessonID, data) => {
    const response = await axios.post(
        `http://localhost:7000/api/v1/event/${lessonID}`,
        data,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
}
const addNewQuiz = async (lessonID, data) => {
    const response = await axios.post(
        `http://localhost:7000/api/v1/quiz/${lessonID}`,
        data,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
}

export const addLesson = async (courseId, data) => {
    const response = await axios.post(
        `http://localhost:7000/api/v1/lesson/${courseId}`,
        data,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
}


export const getAssignments = async (lessonID) => {
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

export const getQuizes = async (lessonID) => {
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

export const getEvents = async (lessonID) => {
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


export const deleteLesson = async (lessonId) => {
    const response = await axios.delete(
        `http://localhost:7000/api/v1/lesson/${lessonId}`,
        {
            headers: {
                Authorization: `${Cookies.get("token")}`,
            },
        }
    );
    return response.data;
};

export const deleteAssignment = async (assignmentID) => {
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


export const deleteEvent = async (eventID) => {
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

export const deleteQuiz = async (quizID) => {
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


export {getLessons, getLesson, addNewContent, addNewAssignment, addNewEvent, addNewQuiz, updateLesson};


