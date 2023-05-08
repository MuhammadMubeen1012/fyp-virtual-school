import axios from "axios";
import Cookies from "js-cookie";


export const getCourses = async () => {
    const teacher = await getTeacher();
    const coursesLinks = teacher.courses;

    return Promise.all(coursesLinks.map((course) => {
        return axios.get(`http://localhost:7000/api/v1/course/${course}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            })
    }))
}


const getTeacher = async () => {
    const response = await axios.get(`http://localhost:7000/api/v1/teacher`, {
        headers: {
            Authorization: `${Cookies.get('token')}`
        }
    })
    return response.data.teacher
}


