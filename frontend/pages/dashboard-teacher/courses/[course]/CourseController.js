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


export {getLessons, getLesson, getContent};


