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
    return await (axios.get(`http://localhost:7000/api/v1/course/lesson/${lesson_id}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }

            })
    )
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


const getContent = async (lessonID) => {
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


export {getLessons, getLesson, getContent, addNewContent, addNewAssignment, addNewEvent,addNewQuiz};


