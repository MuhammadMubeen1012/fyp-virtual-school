import axios from "axios";
import Cookies from "js-cookie";


export const getCourses = (coursesLinks) => {
    return Promise.all(coursesLinks.map((course) => {
        return axios.get(`http://localhost:7000/api/v1/course/${course}`,
            {
                headers: {
                    Authorization: `${Cookies.get('token')}`
                }
            })
    }))
}


export const getTeacher = async () => {
    const response = await axios.get(`http://localhost:7000/api/v1/teacher`, {
        headers: {
            Authorization: `${Cookies.get('token')}`
        }
    })

    return response.data.teacher
}

export const getClassrooms = async (classroomsLinks) => {
    const res = await Promise.all(classroomsLinks.map((classId) => {
        return axios.get(`http://localhost:7000/api/v1/classroom/${classId}`, {
            headers: {
                Authorization: `${Cookies.get('token')}`
            }
        })
    }))
    return res.map((r) => {
        console.log(r.data.classrooms);
        return r.data.classrooms
    })
}